import React from "react";
import "./BodyContainer.scss";

export const BodyContainer = () => {
  return (
    <div className={"chatsBodyContainer"}>
      <div className={"column chatsPeople"}>People</div>
      <div className={"column chats"}>Chats</div>
    </div>
  );
};
