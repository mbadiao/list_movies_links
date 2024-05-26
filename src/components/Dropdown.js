import React from "react";
//cette fonction permet de filtrer les films
const Dropdown = ({ setSortBy }) => {
  // fonction pour changer le critère de tri des films
  const handleSelect = (sortBy) => {
    // on appelle la fonction setSortBy pour changer la valeur de sortBy
    setSortBy(sortBy);
  };

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Fliter by
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button onClick={() => handleSelect("name")}>Title</button>
        </li>
        <li>
          <button onClick={() => handleSelect("rating")}>rating</button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
