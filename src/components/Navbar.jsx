import { useContext } from "react";
import { Link } from "react-router-dom";
import {
    CartContext
}
    from '../context/CartContext';
function NavBar() {
    const { cart } = useContext(CartContext);
    return <nav className="navbar">
        <div className="navbar-brand">
            <h1>Mini Store</h1>
        </div>
        <ul className="navbar-links">

            <li><Link to="/">
                Products
            </Link></li>
            <li><Link to="/form">
                Form
            </Link></li>

        </ul>
        <div className="navbar-cart">
            <h3><Link to="/cart">
                Cart: {cart.length}
            </Link></h3>
        </div>
    </nav>
}

export default NavBar;