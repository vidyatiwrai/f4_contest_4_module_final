// src/redux/reducers.js
import {addToCart,removeFromCart,checkout,setProducts} from "./action";


const initialState = {
  products: [],
  cart: [],
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.includes(action.payload)
          ? state.cart
          : [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CHECKOUT":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default rootReducer;
