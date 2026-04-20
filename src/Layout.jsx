import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { UseCartContext } from "./CartContext";

export default function Layout() {
  const { cart } = UseCartContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  return (
    <main className="container">
      <header>
        <Link to="..">Home</Link>
        <Link to="products">Products</Link>
        <Link to="cart">Cart ({items.length})</Link>
      </header>

      <Outlet />
    </main>
  );
}
