import { useState, useEffect } from "react";
import { UseCartContext } from "./CartContext";

export default function Cart() {
  const { cart, dispatch } = UseCartContext();
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    setCartList(cart);
  }, [cart]);

  const incQuan = (product) => {
    dispatch({ type: "Increase", product });
  };

  const decQuan = (product) => {
    dispatch({ type: "Decrease", product });
  };

  const removeProd = (product) => {
    dispatch({ type: "Remove", product });
  };

  const clearCart = () => {
    dispatch({ type: "Clear", product: undefined });
  };

  const cartEl = cartList.map((product) => {
    return (
      <div key={product.id}>
        <h3>
          {product.name} <small>x {product.quantity}</small>
        </h3>
        <p>${product.price}</p>
        <button onClick={() => incQuan(product)}>+</button>
        <button onClick={() => decQuan(product)}>-</button>
        <button onClick={() => removeProd(product)}>x</button>
      </div>
    );
  });

  return (
    <>
      CART <button onClick={() => clearCart()}>clear</button>
      {cartList.length > 0 ? cartEl : <p>Cart is empty</p>}
    </>
  );
}
