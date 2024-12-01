import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import Header from "../Header/Header";
import "./Results.css";

const Results = () => {
  const { searchResults, loading, error } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && searchResults.length === 0) {
      navigate("/search");
    }
  }, [searchResults, loading, navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="results">
      <Header />
      <main>
        <h2>Search Results</h2>
        {error ? (
          <p className="error">{error}</p>
        ) : searchResults.length > 0 ? (
          <ul>
            {searchResults.map((breed) => (
              <li key={breed.id}>
                <h3>{breed.name}</h3>
                <p>{breed.temperament}</p>
                <p>Life Span: {breed.life_span}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found. Please try another search.</p>
        )}
      </main>
    </div>
  );
};

export default Results;