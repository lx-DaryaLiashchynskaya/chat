import React, { useState } from "react";
import "./ChatChannels.scss";
import SearchInput from "../SearchInput/SearchInput";
import { ChannelsContainer } from "../ChannelsContainer/ChannelsContainer";
import { CHANNELS_TEMPLATE } from "../../constants/channel.constants";
import { IChannelTemplate } from "../../types/channel";
import { SEARCH_INPUT_PLACEHOLDER } from "../../constants/textPhrases.constants";
import { Loader } from "../Loader/Loader";
import { connect } from "react-redux";

interface IChatChannels {
  isSearchInProgress: boolean;
}

const ChatChannels = ({ isSearchInProgress }: IChatChannels) => {
  const [displayedChannels, setDisplayedChannels] =
    useState<IChannelTemplate[]>(CHANNELS_TEMPLATE);

  return (
    <div className={"chatChannelsContainer"}>
      <SearchInput
        inputPlaceholder={SEARCH_INPUT_PLACEHOLDER}
        data={CHANNELS_TEMPLATE}
        setFoundChannels={setDisplayedChannels}
      />
      {isSearchInProgress ? (
        <Loader containerClassName={"searchLoaderContainer"} />
      ) : (
        <ChannelsContainer displayedChannels={displayedChannels} />
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isSearchInProgress: state.search.isSearchInProgress,
  };
};

export default connect(mapStateToProps, null)(ChatChannels);
