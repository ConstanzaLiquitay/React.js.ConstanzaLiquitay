import { useContext } from "react";
import CartContext from "./Context/CartContext";

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return <div>Cart Widget {cart.lenght} </div>;

    /*<button className="btn btn-outline position-relative" >
    <i className="bi bi-cart-plus-fill"></i>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

<span className="visually-hidden">unread messages</span>
</span>
    </button>*/

};

export default CartWidget;
