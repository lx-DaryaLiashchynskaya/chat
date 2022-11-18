import React from "react";
import "./BodyContainer.scss";
import ChatChannels from "../ChatChannels/ChatChannels";

export const BodyContainer = () => {
  return (
    <div className={"chatsBodyContainer"}>
      <ChatChannels />
      <div className={"column chats"}>Chats</div>
    </div>
  );
};
