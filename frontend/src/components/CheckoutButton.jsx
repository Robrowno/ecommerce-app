import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const CheckoutButton = ({ children, className = "" }) => {
	const { cart } = useCart();
	const { user } = useAuth();

	const handleCheckout = async () => {
		try {
			const enrichedItems = cart.map((item) => ({
				name: item.name,
				price: item.price,
				quantity: item.quantity,
				productId: item._id,
			}));

			const res = await fetch(`${import.meta.env.VITE_API_URL}/api/payment/create-checkout-session`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					items: enrichedItems,
					userId: user?.uid || null,
				}),
			});

			const data = await res.json();

			if (data.url) {
				window.location.href = data.url;
			} else {
				console.error("Stripe URL not returned.");
			}
		} catch (err) {
			console.error("Checkout error:", err);
		}
	};

	return (
		<button
			onClick={handleCheckout}
			disabled={cart.length === 0}
			className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 ${className}`}
		>
			{children}
		</button>
	);
};

export default CheckoutButton;
