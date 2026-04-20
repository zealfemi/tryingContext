import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";

import Layout from "./Layout";
import Products from "./Products";
import Cart, { Loader as CartLoader } from "./Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} loader={CartLoader}>
      <Route index element={<Products />} />
      <Route path="cart" element={<Cart />} loader={CartLoader} />
      <Route path="*" element={<Products />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
