import React from "react";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {



    const { cart, setCart } = useState([]);

    const addProduct = (item, quantity) => {

        if (isInCart(item.id)) {
            /*Si está en el carrito lo que hacemos es recorrerlo y sumamos 1,
            es decir,  todos aquellos cuyo id no coindida, quiero que se mantengan tal cual pero si hay algún
            producto en el carrito que sí coincide, lo que quiero es que me modifique la cantidad, me lo dejas tal cual
            con ...product pero le añadimos 1 con product.quantity +1
            */
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
            }));
        } else {

            /*Si no está lo que hacemos es tro array que le indicamos que tiene que meter todo lo que 
            había previamente en el carrito con ...cart para después añadirle el nuevo producto y la cantidad de este, que es 1
             */
            setCart([...cart, { ...item, quantity }]);
        }
    }

    const totalPrice = () => {
        //Va acumulando el precio calculado por cada cantidad de producto
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    const clearCart = () => setCart({});//Con esto se limpia el carrito

    const isInCart = (id) => { //Comprobamos si existe ya en el carrito un producto igual al añadido
        return cart.find(product => product.id === id) ? true : false
    }

    const removeProduct = (id) => { setCart(cart.filter(produc => produc.id !== id)) }; //Eliminar uno del carrito

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>


    );
}

export default CartProvider;