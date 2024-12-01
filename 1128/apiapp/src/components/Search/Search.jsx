import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import Header from "../Header/Header";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const { setSearchResults, setLoading, setError, error } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${query}`);
      const data = await response.json();
      console.log("Fetched Data:", data);

      setSearchResults(data);

      if (data.length === 0) {
        setError("No dog breeds were found.");
      } else {
        navigate("/results");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search">
      <Header />
      <main>
        <h2>Search for a Dog Breed</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter breed name"
          />
          <button type="submit">Search</button>
        </form>
        {error && <p className="error">{error}</p>} {}
      </main>
    </div>
  );
};

export default Search;