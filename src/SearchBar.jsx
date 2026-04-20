import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerms, setSearchTerms] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      navigate(`search/?s=${searchTerms}`);
    }, 800);

    return () => clearTimeout(delay);
  }, [searchTerms, navigate]);

  function handleChange(e) {
    setSearchTerms(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search products"
        className="searchBar"
        onChange={handleChange}
      />
    </>
  );
}
