import React from "react";
import "./ChannelsContainer.scss";
import {account, manAccount} from "../../assets/icons";
import {ChannelItem} from "../ChannelItem/ChannelItem";
import {IChannelTemplate} from "../../types/channel";

const CHANNELS_TEMPLATE: IChannelTemplate[] = [
  {
    profileImage: account,
    name: "Dasha",
    lastMessage: "",
    newMessagesAmount: 1,
  },
  {
    profileImage: manAccount,
    name: "Nikita Kachanoski",
    lastMessage: "sdswda",
    newMessagesAmount: 0,
  },
  {
    profileImage: account,
    name: "Danya",
    lastMessage: "",
    newMessagesAmount: 0,
  },
  {
    profileImage: account,
    name: "Work in Belarus with information technologies (remotely)",
    lastMessage: "Work in Belarus with information technologies (remotely)",
    newMessagesAmount: 2,
  },
  {
    profileImage: account,
    name: "Lena Buglak",
    lastMessage: "",
    newMessagesAmount: 0,
  },
  {
    profileImage: account,
    name: "Natasha",
    lastMessage: "",
    newMessagesAmount: 0,
  },
  {
    profileImage: account,
    name: "Makson",
    lastMessage: "",
    newMessagesAmount: 0,
  },
  {
    profileImage: account,
    name: "Darya",
    lastMessage: "",
    newMessagesAmount: 0,
  },
];

export const ChannelsContainer = () => {
  return (
    <div className={"channelsContainer"}>
      {CHANNELS_TEMPLATE.map((channel) => {
        return <ChannelItem channel={channel} key={`${channel.name} ${channel.profileImage}`}/>;
      })}
    </div>
  );
};
