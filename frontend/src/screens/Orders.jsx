import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useSearchParams } from "react-router-dom";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	// track which dates and individual orders are expanded
	const [openDates, setOpenDates] = useState({});
	const [openOrders, setOpenOrders] = useState({});
	const [searchParams] = useSearchParams();

	const { user } = useAuth();
	const { clearCart } = useCart();
	const cleared = useRef(false);

	// After a successful checkout, clear the cart once
	useEffect(() => {
		if (searchParams.get("success") === "true" && !cleared.current) {
			clearCart();
			cleared.current = true;
		}
	}, [searchParams, clearCart]);

	// Convert an ISO date string into a readable UK format like 11 Apr 2025
	const formatDate = (isoString) =>
		new Date(isoString).toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});

	const groupOrdersByDate = (orders) => {
		const grouped = {};
		// Loop through each order
		orders.forEach((order) => {
			// Convert the createdAt date to readable format
			const dateStr = formatDate(order.createdAt);
			if (!grouped[dateStr]) grouped[dateStr] = [];
			/*	Groups orders into an object where each key is a date, and the value is a list of orders from that date
					"11 Apr 2025": [order1, order2],
					"10 Apr 2025": [order3],				*/
			grouped[dateStr].push(order);
		});
		return grouped;
	};

	const getDateSummary = (ordersOnDate) => {
		let totalItems = 0;
		let totalPrice = 0;
		let totalOrders = ordersOnDate.length;
		// loops through every order for that day and adds up total items and price
		ordersOnDate.forEach((order) => {
			order.orderItems.forEach((item) => {
				totalItems += item.qty;
				totalPrice += item.qty * item.price;
			});
		});
		return { totalItems, totalPrice, totalOrders };
	};

	// count how many individual items are in an order
	const getOrderItemCount = (order) => {
		return order.orderItems.reduce((sum, item) => sum + item.qty, 0);
	};

	// calculate total price of a specific order
	const getOrderTotal = (order) => {
		return order.orderItems.reduce((total, item) => total + item.qty * item.price, 0);
	};

	useEffect(() => {
		if (!user || !user.uid) return;

		axios
			.get(`${import.meta.env.VITE_API_URL}/api/orders/${user.uid}`)
			.then((res) => {
				if (Array.isArray(res.data)) {
					// Sort orders newest first
					const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
					setOrders(sorted);

					// CREATE STATE
					// create object with orders grouped by date
					const grouped = groupOrdersByDate(sorted);
					const dateKeys = Object.keys(grouped);
					// by default, expand ui for all dates
					const allDatesOpen = {};
					dateKeys.forEach((date) => {
						allDatesOpen[date] = true;
					});
					setOpenDates(allDatesOpen);
					// and expand only the first order on the first date
					const firstDate = dateKeys[0];
					const firstOrder = grouped[firstDate]?.[0]?._id;

					if (firstOrder) {
						setOpenOrders({ [firstOrder]: true });
					}
				} else {
					setOrders([]);
				}
				setLoading(false);
			})
			.catch((err) => {
				console.error("Error fetching orders:", err);
				setLoading(false);
			});
	}, []);

	// toggle visibility of a date's orders
	const toggleDate = (date) => {
		setOpenDates((prev) => ({ ...prev, [date]: !prev[date] }));
	};

	// toggle visibility of an order
	const toggleOrder = (orderId) => {
		setOpenOrders((prev) => ({ ...prev, [orderId]: !prev[orderId] }));
	};

	// If user info is loading, show message
	if (!user || !user.uid) return <p className="text-center mt-10">Loading...</p>;

	// CREATE OBJECT TO RENDER
	const groupedOrders = groupOrdersByDate(orders);

	return (
		<div className="max-w-4xl mx-auto mt-12 px-6 text-nowrap">
			<h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Your Orders</h2>
			{loading ? (
				<p className="text-center text-gray-500">Loading orders...</p>
			) : orders.length === 0 ? (
				<p className="text-center text-gray-500">No orders found.</p>
			) : (
				// Convert groupedOrders object into an array of [key, value] pairs
				Object.entries(groupedOrders).map(([date, ordersOnDate]) => {
					const summary = getDateSummary(ordersOnDate);
					return (
						<div key={date} className="mb-4">
							<div
								onClick={() => toggleDate(date)}
								className="flex justify-between items-center bg-gray-100 px-5 py-3 rounded-xl shadow cursor-pointer hover:bg-gray-200 transition"
							>
								<div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
									<span className="text-xl text-gray-400 opacity-50">
										{openDates[date] ? "▼" : "▶"}
									</span>
									<span>{date}</span>
								</div>
								<div className="flex gap-2 items-center text-sm text-gray-600">
									<div className="bg-white px-3 py-1 rounded-full shadow-sm">
										{summary.totalOrders} order{summary.totalOrders !== 1 && "s"}
									</div>
									<div className="bg-white px-3 py-1 rounded-full shadow-sm">
										{summary.totalItems} item{summary.totalItems !== 1 && "s"}
									</div>
									<div className="bg-white px-3 py-1 rounded-full shadow-sm">
										£{summary.totalPrice.toFixed(2)}
									</div>
								</div>
							</div>

							{/* If this date is expanded, render the orders for this date*/}
							{openDates[date] && (
								<div className="mt-2 space-y-2">
									{ordersOnDate.map((order) => (
										<div key={order._id} className="bg-white rounded-xl shadow-sm border">
											<div
												onClick={() => toggleOrder(order._id)}
												className="flex justify-between items-center px-5 py-3 rounded-t-xl cursor-pointer hover:bg-gray-50 transition"
											>
												<div className="flex items-center gap-1 text-sm text-gray-700 font-medium">
													<span className="text-base text-gray-300">
														{openOrders[order._id] ? "▼" : "▶"}
													</span>
													<span className="text-gray-500">Order #</span>
													<span className="text-gray-700 font-semibold">{order._id}</span>
													<span
														className={`ml-2 px-2 py-[0.25rem] rounded-full text-xs font-semibold ${
															order.status === "delivered"
																? "bg-green-300 text-green-700"
																: "bg-yellow-300 text-yellow-700"
														}`}
													>
														{order.status === "delivered" ? "Delivered" : "Shipping"}
													</span>
												</div>
												<span className="text-xs text-gray-500">
													{getOrderItemCount(order)} item
													{getOrderItemCount(order) !== 1 && "s"}
												</span>
											</div>

											{openOrders[order._id] && (
												<div className="divide-y px-5 pb-3">
													{order.orderItems.map((item, idx) => (
														<div
															key={idx}
															className="flex justify-between items-center py-3 text-sm"
														>
															<div className="text-gray-800 font-medium">{item.name}</div>
															<div className="text-gray-600">
																{item.qty} × £{item.price.toFixed(2)}
															</div>
														</div>
													))}
													<div className="flex justify-end pt-3 text-sm font-semibold text-gray-800">
														Total: £{getOrderTotal(order).toFixed(2)}
													</div>
												</div>
											)}
										</div>
									))}
								</div>
							)}
						</div>
					);
				})
			)}
		</div>
	);
};

export default Orders;
