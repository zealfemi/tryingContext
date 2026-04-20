import { UseCartContext } from "./CartContext";

export default function Products() {
  const prods = [
    {
      id: 1,
      name: "Oil",
      price: 23,
    },
    {
      id: 2,
      name: "Soap",
      price: 36,
    },
    {
      id: 3,
      name: "Shampoo",
      price: 30,
    },
  ];

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
