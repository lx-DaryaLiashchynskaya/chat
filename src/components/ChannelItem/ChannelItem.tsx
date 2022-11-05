import React, { useState } from "react";
import "./ChannelItem.scss";
import { IChannelTemplate } from "../../types/channel";

const CHANNEL_EMPTY_MESSAGE_INFO = "Messages do not exist";

export const ChannelItem = ({ channel }: { channel: IChannelTemplate }) => {
  const [isChannelViewed, setIsChannelViewed] = useState(false);

  const showChannelProfile = () => {
    console.log("channel profile");

    setIsChannelViewed(true);

  };

  return (
    <div className={"channelItem"} onClick={showChannelProfile}>
      <div className={"channelContent"}>
        <img alt={""} src={channel.profileImage} className={"channelImage"} />
        <div className={"channelOwnerContainer"}>
          <span className={"channelName"}>{channel.name}</span>
          <span className={"channelLastMessage"}>
            {channel.lastMessage
              ? channel.lastMessage
              : CHANNEL_EMPTY_MESSAGE_INFO}
          </span>
        </div>
      </div>
      {channel.newMessagesAmount ? (
        <div
          className={`newNotice ${
            isChannelViewed ? "fadeOutAnimation" : "fadeInAnimation"
          }`}
        >
          {channel.newMessagesAmount}
        </div>
      ) : null}
    </div>
  );
};
