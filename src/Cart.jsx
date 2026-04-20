import { UseCartContext } from "./CartContext";

export default function Cart() {
  const { cart, dispatch } = UseCartContext();

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

  function totalItems() {
    return cart.reduce((total, product) => total + product.quantity, 0);
  }

  function totalPrice() {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }

  const cartEl = cart.map((product) => {
    return (
      <div key={product.id}>
        <h3>
          {product.name} <small>x {product.quantity}</small>
        </h3>
        <p>${product.price * product.quantity}</p>
        <span className="buttons">
          <button onClick={() => incQuan(product)}>+</button>
          <span>{product.quantity}</span>
          <button onClick={() => decQuan(product)}>-</button>
        </span>
        <button className="remove" onClick={() => removeProd(product)}>
          x
        </button>
      </div>
    );
  });

  return (
    <>
      <h2>CART</h2>
      <button onClick={() => clearCart()}>clear</button>
      {cart.length > 0 ? cartEl : <p>Cart is empty</p>}
      <hr />
      <div>
        <p>Items: {totalItems()}</p>
        <p>Total: ${totalPrice()}</p>
      </div>
    </>
  );
}
