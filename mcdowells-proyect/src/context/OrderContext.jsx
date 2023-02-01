import { createContext, useContext, useState } from "react";

export const AppContextCart = createContext();


export function AppCart({ children }) {
    const [cart, setCart] = useState([]);

    const [totalPayment, setTotalPayment] = useState([{
        totalPay: 0.00
    }]);

    return (
        <AppContextCart.Provider value={{ cart, setCart, totalPayment, setTotalPayment }}>
            {children}
        </AppContextCart.Provider>
    );
}
export function useAppContext() {
    return useContext(AppContextCart);
}