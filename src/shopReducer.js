import Product from "./components/Product";

export const intialState = {
    products : [],
    total : 0,
}


export const shopReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "ADD_TO_CART":
        return{...state,
            products:  payload.products,
        };
        case "REMOVE_FROM_CART":
        return{...state,
            products:  payload.products,
        };

        default: throw new Error("unknow reducer");
    };
};