import React from "react";
import "./App.scss";
import "./styles/scrollbar.scss"
import { Header } from "./components/Header/Header";
import {BodyContainer} from "./components/BodyContainer/BodyContainer";

function App() {
  return (
    <div className="body">
      <Header />
      <BodyContainer />
    </div>
  );
}

export default App;
