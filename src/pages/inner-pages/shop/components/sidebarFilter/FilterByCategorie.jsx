import React from "react";

const FilterByCategorie = () => {
  const categoriesItem = [
    {
      id: 1,
      title: " Winter Collections",
      itemList: [" Hoodies", "Jacket", "Others"],
    },
    {
      id: 2,
      title: "Woman",
      itemList: ["Kurtis", "Western", "Shoes"],
    },
    {
      id: 3,
      title: "Men",
      itemList: ["T-Shirts", "Jeans", "Polo Shirts"],
    },
    {
      id: 4,
      title: "Groming",
      itemList: ["Hoodies", "Jacket", "Others"],
    },
    {
      id: 5,
      title: "Electronics",
      itemList: ["Monitor", "Iron", "Others"],
    },
  ];
  return (
    <>
      {categoriesItem.map((item) => (
        <li className="nav-item" key={item.id}>
          <button
            className="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            {item.title}
          </button>
          <ul className="dropdown-menu">
            {item.itemList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
};

export default FilterByCategorie;
