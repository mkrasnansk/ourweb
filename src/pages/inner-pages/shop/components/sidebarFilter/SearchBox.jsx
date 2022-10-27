import React from "react";

const SearchBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Search" />
      <button>
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBox;
