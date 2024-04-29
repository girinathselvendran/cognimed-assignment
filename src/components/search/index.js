import React, { useState } from "react";
import "./styles.css";
import { researchRecords, userRecords } from "../../utility/data";

export const SearchSection = ({ mode, setChatData, setUserData }) => {
  const [userList] = useState(userRecords);
  const [researchList] = useState(researchRecords);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredUserList = userList.filter((user) =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredResearchList = researchList.filter((research) =>
    research.topic.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSelectRow = (data, title) => {
    setChatData(data);
    setUserData(title);
  };

  return (
    <div className="search-component">
      <section className="search-section">
        <div className="search-input">
          <i className="fa-regular fa-magnifying-glass"></i>
          <input
            type="input"
            placeholder={mode === "mode1" ? "Search ID" : "Search Topic"}
            name="search"
            value={searchInput}
            onChange={handleSearch}
          ></input>
        </div>
        <button>+</button>
      </section>
      <section className="search-list-section">
        <button className="left-arrow-button">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        {mode && mode === "mode1" ? (
          <>
            {filteredUserList.map((user, index) => (
              <div
                className="search-list"
                key={index}
                onClick={() => handleSelectRow(user.userRecordsList, user)}
              >
                <p>
                  <span className="title-text">{user.name}</span>
                  <br />
                  <span className="data-text">{user.date}</span>
                </p>
              </div>
            ))}
          </>
        ) : mode === "mode2" ? (
          <>
            {filteredResearchList.map((research, index) => (
              <div
                className="search-list"
                key={index}
                onClick={() =>
                  handleSelectRow(research.researchRecordsList, research)
                }
              >
                <p>
                  <span className="title-text">{research.topic}</span>
                  <br />
                  <span className="data-text">{research.date}</span>
                </p>
              </div>
            ))}
          </>
        ) : null}
      </section>
    </div>
  );
};
