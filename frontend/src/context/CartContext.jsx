import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART": {
			const existingItemIndex = state.items.findIndex((item) => item._id === action.payload._id);

			if (existingItemIndex > -1) {
				const updatedItems = [...state.items];
				updatedItems[existingItemIndex] = {
					...updatedItems[existingItemIndex],
					quantity: updatedItems[existingItemIndex].quantity + 1,
				};
				return { ...state, items: updatedItems };
			}
			return {
				...state,
				items: [...state.items, { ...action.payload, quantity: 1 }],
			};
		}

		case "REMOVE_FROM_CART":
			return {
				...state,
				items: state.items.filter((item) => item._id !== action.payload),
			};

		case "UPDATE_QUANTITY":
			return {
				...state,
				items: state.items.map((item) =>
					item._id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
				),
			};

		case "CLEAR_CART":
			return {
				...state,
				items: [],
			};

		default:
			return state;
	}
};

export const CartProvider = ({ children }) => {
	const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

	const addToCart = (product) => {
		dispatch({ type: "ADD_TO_CART", payload: product });

	};

	const removeFromCart = (productId) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: productId });
	};

	const updateQuantity = (productId, quantity) => {
		dispatch({
			type: "UPDATE_QUANTITY",
			payload: { id: productId, quantity },
		});
	};

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};

	const getCartTotal = () => {
		return cartState.items.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const getCartItemsCount = () => {
		return cartState.items.reduce((total, item) => total + item.quantity, 0);
	};

	return (
		<CartContext.Provider
			value={{
				cart: cartState.items,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				getCartTotal,
				getCartItemsCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
