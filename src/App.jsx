import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";

import Layout from "./Layout";
import Products from "./Products";
import Cart from "./Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<>HOME</>} />
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<Cart />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
