import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [currentMode, setCurrentMode] = useState("mode1");

  // Simulate API call to fetch results (replace with your actual API call)
  const fetchResults = async (query) => {
    const response = await fetch(`your-api-endpoint?q=${query}`);
    const data = await response.json();
    setSearchResults(data.results);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchResults(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectResult = (result) => {
    // Handle selection of a search result (update UI or perform actions)
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMode = () => {
    setCurrentMode(currentMode === "mode1" ? "mode2" : "mode1");
  };

  return (
    <div className={`search-app ${currentMode}`}>
      <h1>Search</h1>
      <div className="search-bar">
        <label htmlFor="search">Search ID or Name:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              // Trigger search on Enter key press
            }
          }}
        />
        <ul className={`search-results ${isMenuOpen ? "" : "hidden"}`}>
          {searchResults.map((result) => (
            <li key={result.id} onClick={() => handleSelectResult(result)}>
              {result.name}
            </li>
          ))}
        </ul>

        <button
          className={`toggle-button ${currentMode === "mode2" ? "active" : ""}`}
          onClick={toggleMode}
        >
          <span className="slider"></span>
          <span className="toggle-text">
            Mode {currentMode === "mode1" ? "2" : "1"}
          </span>
        </button>
      </div>

      <div className="mode-toggle">
        <label htmlFor="mode-switch">
          <input
            type="checkbox"
            id="mode-switch"
            checked={currentMode === "mode2"}
            onChange={toggleMode}
          />
          Mode 2
        </label>
      </div>
      {/* Add components or modify styles based on currentMode */}
      {currentMode === "mode1" && (
        <div className="message-section">
          <h2>Message</h2>
          <textarea rows="4" placeholder="Type your message here..."></textarea>
          <button>Send</button>
        </div>
      )}
      {currentMode === "mode2" && (
        <div className="document-repository">
          <h2>Document Repository</h2>
          {/* Add UI elements for document search and display */}
          {/* Implement logo animation here */}
        </div>
      )}
    </div>
  );
}

export default App;
