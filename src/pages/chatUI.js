import React, { useContext, useState } from "react";
import Menu from "../components/menu";
import { SearchSection } from "../components/search";
import "./styles.css";
import { ChatSection } from "../components/chatSection";
import UserContext from "../context/UserContext";

export const ChatUI = () => {
  const { data } = useContext(UserContext);
  const [chatData, setChatData] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <div className="page">
      <Menu />
      <SearchSection
        mode={data}
        setChatData={setChatData}
        setUserData={setUserData}
      />
      <ChatSection mode={data} chatData={chatData} userData={userData} />
    </div>
  );
};
