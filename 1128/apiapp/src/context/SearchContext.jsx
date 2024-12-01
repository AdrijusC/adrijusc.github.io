import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <SearchContext.Provider
      value={{ searchResults, setSearchResults, loading, setLoading, error, setError }}
    >
      {children}
    </SearchContext.Provider>
  );
};