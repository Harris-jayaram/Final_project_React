// SearchResults.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  return (
    <div>
      <h1>Search Results</h1>
      <p>Display search results for: {searchQuery}</p>
      {/* Add logic to fetch and display search results */}
    </div>
  );
};

export default SearchResults;
