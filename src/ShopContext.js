import { createContext, useContext, useReducer } from "react";
import  { shopReducer, intialState } from "./shopReducer";
import { type } from "@testing-library/user-event/dist/type";

const ShopContext =createContext(intialState);
export const ShopProvider = ({children}) =>{
    const [state,dispatch] =useReducer(shopReducer, intialState);

    const addToCart = (product) =>{
        const updatedProduct = state.products.concat(product);

        dispatch({
            type : "ADD_TO_CART",
            payload: {
                products:updatedProduct,
            }
        })
    };

    const removeFromCart = (product) => {
        const updatedProduct = state.products.filter(p => p.id !== product.id);

        dispatch({
            type : "REMOVE_FROM_CART",
            payload: {
                products:updatedProduct,
            }
        })
    }

    const values = {
        products : state.products,
        total : state.total,
        addToCart,
        removeFromCart
    };
    return(
        <ShopContext.Provider value={values}>
            {children}
        </ShopContext.Provider>
    )
};

const useShop = () =>{
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error ("context most be used inside shop context"); 
    }
    return context;
}
export default useShop;