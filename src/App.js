import React, { useState, useEffect } from "react";
import "./App.css";
import { ChatUI } from "./pages/chatUI";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <ChatUI />
    </UserContextProvider>
  );
};

export default App;
