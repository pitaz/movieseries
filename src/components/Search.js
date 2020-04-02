import React from "react";

const Search = ({setQuery, onHandleSearch}) => {
  return (
    <div className="search-wrapper">
      <input type="text" placeholder="Search.." className="search-input" onChange={e => setQuery(e.target.value )} />
      <button className="search-button" onClick={onHandleSearch}>Search</button>
    </div>
  );
};

export default Search;
