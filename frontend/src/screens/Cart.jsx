// src/screens/Cart.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CheckoutButton from "../components/CheckoutButton";

const Cart = () => {
	const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();

	return (
		<div className="max-w-5xl mx-auto px-4 py-10">
			<h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>

			{cart.length === 0 ? (
				<p className="text-gray-500 text-lg">Your cart is empty.</p>
			) : (
				<>
					<div className="space-y-6">
						{cart.map((item) => (
							<div
								key={item._id}
								className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4"
							>
								<div className="flex items-center gap-4 w-full sm:w-2/3">
									<img
										src={`${import.meta.env.VITE_API_URL}${item.image}`}
										alt={item.name}
										className="w-24 h-24 object-cover rounded"
										onError={(e) => (e.target.src = "/fallback.png")} // Optional fallback
									/>
									<div>
										<h3 className="text-lg font-semibold">{item.name}</h3>
										<p className="text-gray-500 text-sm">£{item.price.toFixed(2)}</p>
									</div>
								</div>

								<div className="flex items-center gap-4">
									<div className="flex items-center border rounded">
										<button
											className="px-2 py-1 hover:bg-gray-100"
											onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
										>
											-
										</button>
										<span className="px-3">{item.quantity}</span>
										<button
											className="px-2 py-1 hover:bg-gray-100"
											onClick={() => updateQuantity(item._id, item.quantity + 1)}
										>
											+
										</button>
									</div>
									<button
										onClick={() => removeFromCart(item._id)}
										className="text-red-500 hover:text-red-700"
									>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>

					<div className="text-right mt-8 text-2xl font-bold">Total: £{getCartTotal().toFixed(2)}</div>

					<div className="mt-6 text-right flex justify-end">
						<CheckoutButton className="w-80">Proceed to Checkout</CheckoutButton>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
