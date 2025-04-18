import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import CheckoutButton from "./CheckoutButton";

const CartDropdown = ({ isOpen, onClose, trigger }) => {
	const { cart, removeFromCart, updateQuantity, getCartTotal, getCartItemsCount } = useCart();

	return (
		<Dropdown isOpen={isOpen} onClose={onClose} trigger={trigger}>
			<div className="w-96 bg-white rounded-lg shadow-xl border border-gray-200">
				<div className="p-4">
					<div className="flex justify-between items-center mb-4">
						<h3 className="text-lg font-semibold">Shopping Cart</h3>
						<span className="text-sm text-gray-500">{getCartItemsCount()} items</span>
					</div>

					{cart.length === 0 ? (
						<p className="text-gray-500 text-center py-4">Your cart is empty</p>
					) : (
						<>
							<div className="max-h-96 overflow-y-auto">
								{cart.map((item) => (
									<div key={item._id} className="flex items-center justify-between py-3 border-b">
										<div className="flex items-center space-x-3">
											<img
												src={`${import.meta.env.VITE_API_URL}${item.image}`}
												alt={item.name}
												className="w-12 h-12 object-cover rounded"
											/>
											<div>
												<h4 className="text-sm font-medium">{item.name}</h4>
												<p className="text-sm text-gray-500">£{item.price}</p>
											</div>
										</div>
										<div className="flex items-center space-x-3">
											<div className="flex items-center border rounded">
												<button
													className="px-2 py-1 hover:bg-gray-100"
													onClick={() =>
														updateQuantity(item._id, Math.max(0, item.quantity - 1))
													}
												>
													-
												</button>
												<span className="px-2 py-1 text-sm">{item.quantity}</span>
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
												×
											</button>
										</div>
									</div>
								))}
							</div>

							<div className="mt-4 pt-4 border-t space-y-2">
								<div className="flex justify-between mb-4">
									<span className="font-semibold">Total:</span>
									<span className="font-semibold">£{getCartTotal().toFixed(2)}</span>
								</div>
								<Link
									to="/cart"
									onClick={() => {
										onClose();
									}}
									className="flex justify-center w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
								>
									View Cart
								</Link>
								<CheckoutButton
									className="w-full"
									onClick={() => {
										onClose();
									}}
								>
									Checkout
								</CheckoutButton>
							</div>
						</>
					)}
				</div>
			</div>
		</Dropdown>
	);
};

CartDropdown.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	trigger: PropTypes.node.isRequired,
};

export default CartDropdown;
