import { useContext, useReducer } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
    const { cart, dispatch } = useContext(CartContext);
    

    if (!cart || cart.length === 0) {
        return (
            <div className="empty-cart-container">
                <img
                    src="https://img.freepik.com/premium-vector/ecommerce-shopping-genie-with-empty-cart-illustration_1073071-44557.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Empty Cart"
                    className="empty-cart-image"
                />
            </div>
        )
    }

    return (
        <div className="cart-container">
            {cart.map((product) => (
                <div className="cart-card" key={product.id}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="cart-product-image"
                    />
                    <div className="cart-product-details">
                        <h3 className="cart-product-title">{product.title}</h3>
                        <p className="cart-product-price">${product.price}</p>
                        <div className="cart-product-quantity">
                            <button
                                className="quantity-decrease"
                                onClick={() =>
                                    dispatch({
                                        type: 'DECREASE_QUANTITY',
                                        payload: product
                                    })
                                }
                            >
                                -
                            </button>
                            <span className="quantity-value">{product.quantity}</span>
                            <button
                                className="quantity-increase"
                                onClick={() =>
                                    dispatch({
                                        type: 'ADD_TO_CART',
                                        payload: product
                                    })
                                }
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="cart-remove-button"
                            onClick={() =>
                                dispatch({
                                  type: 'REMOVE_FROM_CART',
                                  payload: product
                                })
                              }
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <div className="cart-footer">
                <button className="proceed-to-pay-button">
                    Proceed to Pay
                </button>
            </div>
        </div>
    );
}

export default Cart;