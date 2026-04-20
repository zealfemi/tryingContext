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
import SearchResults from "./SearchResults";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Products />} />
      <Route path="cart" element={<Cart />} />
      <Route path="search" element={<SearchResults />} />
      <Route path="*" element={<Products />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
