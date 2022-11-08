import React, { useState } from "react";
import "./ChatChannels.scss";
import { SearchInput } from "../SearchInput/SearchInput";
import { ChannelsContainer } from "../ChannelsContainer/ChannelsContainer";
import { CHANNELS_TEMPLATE } from "../../constants/channel.constants";
import { IChannelTemplate } from "../../types/channel";
import { SEARCH_INPUT_PLACEHOLDER } from "../../constants/textPhrases.constants";

export const ChatChannels = () => {
  const [displayedChannels, setDisplayedChannels] =
    useState<IChannelTemplate[]>(CHANNELS_TEMPLATE);

  return (
    <div className={"chatChannelsContainer"}>
      <SearchInput
        inputPlaceholder={SEARCH_INPUT_PLACEHOLDER}
        data={CHANNELS_TEMPLATE}
        setFoundChannels={setDisplayedChannels}
      />
      <ChannelsContainer displayedChannels={displayedChannels} />
    </div>
  );
};
