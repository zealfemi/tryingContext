import { UseCartContext } from "./CartContext";
import prods from "./products";

export default function Products() {
  const { dispatch } = UseCartContext();

  const addProduct = (prod) => {
    dispatch({ type: "Add", product: prod });
  };

  const prodsEl = prods.map((prod) => {
    return (
      <div key={prod.id}>
        <h3>{prod.name}</h3>
        <p>${prod.price}</p>
        <button
          onClick={() => {
            addProduct(prod);
          }}
        >
          Add to cart
        </button>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h2>PRODUCTS</h2>
      {prodsEl}
    </>
  );
}
