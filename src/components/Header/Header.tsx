import React from "react";
import "./Header.scss";
import { CircleButton } from "../../lego-ui/CircleButton/CircleButton";
import {account} from "../../assets/icons";

export const Header = () => {
  const onEnterHandler = () => {
    console.log("click");
  };

  return (
    <header className={"header"}>
      <span className={"logo"}>ChitChat</span>
      <CircleButton onAction={onEnterHandler} buttonImg={account} />
    </header>
  );
};
