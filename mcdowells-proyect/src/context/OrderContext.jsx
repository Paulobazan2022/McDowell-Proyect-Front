import { createContext, useContext, useState } from "react";

export const AppContextOrder = createContext();


export function AppOrder({ children }) {
    const [sharedOrder, setSharedOrder] = useState([]);

    const [totalPayment, setTotalPayment] = useState([{
        totalPay : 0.00
    }]);

    return (
        <AppContextOrder.Provider value={{ sharedOrder, setSharedOrder, totalPayment, setTotalPayment }}>
            {children}
        </AppContextOrder.Provider>
    );
}
export function useAppContext() {
    return useContext(AppContextOrder);
}