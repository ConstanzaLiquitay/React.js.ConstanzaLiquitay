import { useContext } from "react";
import CartContext from "./Context/CartContext";
import { getCartQuantity } from "../utils";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const quantity = getCartQuantity(cart);

console.log(cart);
        return(<Link to= "./Checkout"> 
        <button className="btn btn-outline position-relative" >
        <i className="bi bi-cart-plus-fill"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {!!quantity && quantity }
    <span className="visually-hidden">unread messages</span>
    </span>
        </button>
        </Link>)
            

    

};

export default CartWidget;
