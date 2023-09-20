import { useContext } from "react";
import CartContext from "./Context/CartContext";

const CheckOut = () => {

    const { cart } = useContext(CartContext);
    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cart.map((items) => {
                    <li key={items.id}>
                        <p> {items.title} </p>
                        <p>{items.quantity}</p>
                        <p> {items.price}</p>
                        <p>{items.price + items.quantity}</p>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default CheckOut
