import React, { useEffect, useState } from "react";
import "./styles.css";

export const ChatSection = ({ mode, chatData, userData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userRecordsList, setUserRecordsList] = useState(null);
  const [researchRecords, setResearchRecords] = useState(null);

  useEffect(() => {
    if (chatData) {
      setUserRecordsList(chatData);
      setResearchRecords(chatData);
    }
    console.log("userData", userData);
  }, [chatData]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const sendMessage = () => {
    if (!userRecordsList?.length) return;
    if (!researchRecords?.length) return;

    const newMessage = {
      id: userRecordsList.length + 1,
      sender: "You",
      content: searchTerm,
      timestamp: new Date().toISOString(),
    };

    if (mode === "mode1") {
      setUserRecordsList([...userRecordsList, newMessage]);
    } else if (mode === "mode2") {
      setResearchRecords([...researchRecords, newMessage]);
    }
    setSearchTerm("");
  };

  return (
    <>
      {userRecordsList?.length && (
        <>
          {mode === "mode1" ? (
            <div className="chat-section">
              <h2>{userData?.name}</h2>

              <div className="chat-date">
                <div className="horizontal-line"></div>
                <span>{userData?.date}</span>
                <div className="horizontal-line"></div>
              </div>

              <div className="chat-app">
                <main className="chat-main">
                  <ul className="message-list">
                    {userRecordsList?.map((message) => (
                      <li
                        key={message.id}
                        className={`${
                          message.sender === "You"
                            ? "sent-message"
                            : "received-message"
                        }`}
                      >
                        <img
                          className={
                            "chat-icon " +
                            `${message.sender === "You" ? "align-left" : ""}`
                          }
                          src="https://static-00.iconduck.com/assets.00/add-2-remove-bold-cross-buttons-button-add-plus-icon-511x512-dsn8nxc3.png"
                          alt="icon"
                          width="35"
                        ></img>

                        <div
                          className={`message ${
                            message.sender === "You" ? "outgoing" : "incoming"
                          }`}
                        >
                          <span className="message-content">
                            {message.content}
                          </span>{" "}
                          <br />
                        </div>
                      </li>
                    ))}
                  </ul>
                </main>
                <footer className="chat-footer">
                  <input
                    type="text"
                    placeholder="Type your message here..."
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        sendMessage();
                      }
                    }}
                  />
                  <button onClick={sendMessage}>Send</button>
                </footer>
              </div>
            </div>
          ) : 
          mode === "mode2" ? (
          
            <div className="chat-section light-bg">
              <h2>{userData?.topic}</h2>

              <div className="chat-date">
                <div className="horizontal-line2"></div>
                <span>{userData?.date}</span>
                <div className="horizontal-line2"></div>
              </div>

              <div className="chat-app">
                <main className="chat-main">
                  <ul className="message-list">
                    {researchRecords?.map((message) => (
                      <li
                        key={message.id}
                        className={`${
                          message.sender === "You"
                            ? "sent-message"
                            : "received-message"
                        }`}
                      >
                        <img
                          className={
                            "spinning-icon " +
                            `${message.sender === "You" ? "align-left" : ""}`
                          }
                          src="https://static-00.iconduck.com/assets.00/add-2-remove-bold-cross-buttons-button-add-plus-icon-511x512-dsn8nxc3.png"
                          alt="icon"
                          width="35"
                        ></img>

                        <div
                          className={`message ${
                            message.sender === "You" ? "outgoing" : "incoming"
                          }`}
                        >
                          <span className="message-content">
                            {message.content}
                          </span>
                          <br />
                        </div>
                      </li>
                    ))}
                  </ul>
                </main>
                <footer className="chat-footer">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={searchTerm}
                    onChange={(event) => handleChange(event)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        sendMessage();
                      }
                    }}
                  />
                  <button onClick={sendMessage}>Send</button>
                </footer>
              </div>
            </div>
          ) : 
          null}
        </>
      )}
    </>
  );
};
