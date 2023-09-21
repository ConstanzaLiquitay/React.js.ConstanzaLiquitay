import { useState } from "react";
import Swal from 'sweetalert2';
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const itemInCart = cart.find((items) => items.id === id);
    return !!itemInCart;
  };

  const addItem = (product, quantity) => {

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto Agregado al Carrito 🍷',
      showConfirmButton: false,
      timer: 1000
    })

    const itemInCart = isInCart(product.id);

    if (itemInCart) {
      const newCart = cart.map((items) => {
        if (items.id === product.id) {
          return {
            ...items,
            quantity: items.quantity + quantity,
          };
        }

        return items;
      });
      setCart(newCart);
    } else {
      // agregar item a cart
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((items) => items.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;