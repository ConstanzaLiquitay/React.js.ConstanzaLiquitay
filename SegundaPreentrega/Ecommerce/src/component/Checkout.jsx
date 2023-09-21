import { useContext, useState } from "react";
import CartContext from "./Context/CartContext";
import { getCartTotal, mapCartToOrderItems } from "../utils";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../services";
import  Formulario  from "./Formulario";
import "./Checkout.css";

const CheckOut = () => {

    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { cart, clear } = useContext(CartContext);

    const total = getCartTotal(cart);
    const handleCheckout = () => {
        const order = {
            buyer: {
                name: "Constanza",
                phone: "2646248745",
                email: "cotyliquitay@gmail.com",
            },
            items: mapCartToOrderItems(cart),
            total,
            data: serverTimestamp(),
        };
        setIsLoading(true);
        createOrder(order).then((docRef) => {
            setOrderId(docRef.id)
            setIsLoading(false);
            clear();
        })
    };
    return (
        <div>
            <h1>Resumen de la Compra</h1>

            <Formulario/>
            <div>


                {orderId && <p>El id de la orden es : {orderId}</p>}
                {!orderId && (
                    <>
                        <div className="container-checkout">
                            <ul >
                                {cart.map((items) => (
                                    <li key={items.id}>
                                        <p> {items.title} </p>
                                        <p>{items.quantity}</p>
                                        <p> ${items.price}</p>
                                        <p>Subtotal:${items.price * items.quantity}</p>
                                    </li>
                                ))}
                            </ul>
                            <p>Total de la compra:${total} </p>
                            <button onClick={handleCheckout}> Finalizar Compra</button>
                            {isLoading && <p>Procesando compra...</p>}
                        </div>
                    </>

                )}
            </div>
        </div>

    );
};

export default CheckOut
