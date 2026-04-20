import { Outlet, Link } from "react-router-dom";
import { UseCartContext } from "./CartContext";

export default function Layout() {
  const { cart } = UseCartContext();

  return (
    <main className="container">
      <h1>Gbackie Store</h1>
      <header>
        <Link to="..">Home</Link>
        <Link to="cart">Cart ({cart.length})</Link>
      </header>

      <Outlet />
    </main>
  );
}
