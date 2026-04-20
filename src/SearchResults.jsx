import { useSearchParams } from "react-router-dom";
import prods from "./products";
import { UseCartContext } from "./CartContext";

export default function SearchResults() {
  const [searchParam] = useSearchParams();
  const searchTerms = searchParam.get("s").toLocaleLowerCase();

  const { dispatch } = UseCartContext();

  const addProduct = (prod) => {
    dispatch({ type: "Add", product: prod });
  };

  const availProd = prods.filter((prod) =>
    prod.name.toLocaleLowerCase().includes(searchTerms),
  );

  const searchList = availProd.map((prod) => {
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
      <div style={{ marginTop: "15px" }}>Search results</div>
      <div>
        {availProd.length > 0 ? (
          searchList
        ) : (
          <p>There are no products for search term: {searchTerms}</p>
        )}
      </div>
    </>
  );
}
