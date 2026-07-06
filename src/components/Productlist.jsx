import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
function Productlist(props) {
    const {dispatch, cart } = useContext(CartContext);
    const filteredProducts =
    props.products.filter(product =>
    
    product.title
    .toLowerCase()
    .includes(
    props.search.toLowerCase()
    )
    
    );


    function addToCart(product){
        setCart(
        [
        ...cart,
        product
        ]
        );
        }
    return (
        <div className="product-list">
            {filteredProducts.map((product) => {
                return (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <button className="add-to-cart" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
                            Add to Cart </button>
                    </div>
                );
            })}

        </div>
    );
}

export default Productlist;