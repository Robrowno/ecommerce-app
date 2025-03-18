import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import CartDropdown from "./CartDropdown";
import PropTypes from "prop-types";

const CartIcon = ({ isOpen, onToggle }) => {
	const { getCartItemsCount } = useCart();
	const cartCount = getCartItemsCount();

	// Handle body scroll when cart is open
	useEffect(() => {
		if (isOpen) {
			// Get the width of the scrollbar
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			// Add padding to prevent page shift
			document.body.style.paddingRight = `${scrollbarWidth}px`;
			document.body.style.overflow = "hidden";
		} else {
			// Remove the padding when closing
			document.body.style.paddingRight = "0";
			document.body.style.overflow = "unset";
		}

		return () => {
			// Cleanup
			document.body.style.paddingRight = "0";
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const trigger = (
		<button
			onClick={() => onToggle(!isOpen)}
			className={`relative p-2 text-gray-400 hover:text-white transition-colors ${isOpen ? "text-white" : ""}`}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
			{cartCount > 0 && (
				<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
					{cartCount}
				</span>
			)}
		</button>
	);

	return <CartDropdown isOpen={isOpen} onClose={() => onToggle(false)} trigger={trigger} />;
};

CartIcon.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired,
};

export default CartIcon;
