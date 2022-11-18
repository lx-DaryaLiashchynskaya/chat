import React from "react";
import "./ChannelsContainer.scss";
import { ChannelItem } from "../ChannelItem/ChannelItem";
import { IChannelTemplate } from "../../types/channel";
import {NO_CHANNELS_FOUND_MESSAGE} from "../../constants/textPhrases.constants";

export const ChannelsContainer = ({
  displayedChannels,
}: {
  displayedChannels: IChannelTemplate[];
}) => {
  return (
    <div className={"channelsContainer"}>
      {displayedChannels.length ? (
        displayedChannels.map((channel) => {
          return (
            <ChannelItem
              channel={channel}
              key={`${channel.name} ${channel.profileImage}`}
            />
          );
        })
      ) : (
        <span>{NO_CHANNELS_FOUND_MESSAGE}</span>
      )}
    </div>
  );
};
