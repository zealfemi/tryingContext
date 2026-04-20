import { createContext, useContext, useReducer } from "react";
import CartReducer from "./CartContextReducer";

// CONTEXT AND TESTER

const CartContext = createContext();

export const UseCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw {
      message: "Cart is undefined",
    };
  }

  return context;
};

// CONTEXT PROVIDER

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return <CartContext value={{ cart, dispatch }}>{children}</CartContext>;
};
export default CartContextProvider;
