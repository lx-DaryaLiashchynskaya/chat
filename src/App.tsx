import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ChatBody } from "./components/ChatBody/ChatBody";

function App() {
  return (
    <div className="body">
      <Header />
      <ChatBody />
    </div>
  );
}

export default App;
