import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <input
        onChange={props.handleSearch}
        type="text"
        placeholder="Search Food"
      />
    </div>
  );
}

export default SearchBar;
