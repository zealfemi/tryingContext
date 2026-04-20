import { Outlet, NavLink } from "react-router-dom";
import { UseCartContext } from "./CartContext";
import SearchBar from "./SearchBar";

export default function Layout() {
  const { cart } = UseCartContext();

  return (
    <main className="container">
      <h1>Gbackie Store</h1>
      <header>
        <NavLink to="..">Home</NavLink>
        <NavLink to="cart">Cart ({cart.length})</NavLink>
      </header>
      <SearchBar />

      <Outlet />
    </main>
  );
}
