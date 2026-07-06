import { createContext, useReducer } from 'react'; // Import useReducer

export const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                // If the item already exists, update its quantity
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // If the item does not exist, add it with a quantity of 1
            return [...state, { ...action.payload, quantity: 1 }];
        }
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.id !== action.payload.id);
        case 'DECREASE_QUANTITY': {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                // If the item's quantity is greater than 1, decrease it
                if (existingItem.quantity > 1) {
                    return state.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                }
                // If the item's quantity is 1, remove it from the cart
                return state.filter((item) => item.id !== action.payload.id);
            }
            return state; // If the item doesn't exist, return the current state
        }
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []); // Initialize cart as an empty array

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};