import React, { useState } from "react";
import "./styles.css";

function SideBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="search-bar">
      <label htmlFor="search">Search ID or Name:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className={`search-results ${isMenuOpen ? "" : "hidden"}`}>
        {/* Add search result items here */}
        <li>First Last Name</li>
        <li>First Last Name</li>
        <li>First Last Name</li>
      </ul>
      <button onClick={toggleMenu}>
        <i className={`fas fa-chevron-${isMenuOpen ? "down" : "up"}`}></i>
      </button>
    </div>
  );
}

export default SideBar;
