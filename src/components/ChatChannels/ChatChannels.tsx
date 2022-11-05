import React from "react";
import "./ChatChannels.scss";
import { SearchInput } from "../SearchInput/SearchInput";
import { searchIcon } from "../../assets/icons";
import { ChannelsContainer } from "../ChannelsContainer/ChannelsContainer";

const SEARCH_INPUT_PLACEHOLDER = "Enter user name for the search...";

export const ChatChannels = () => {
  const onSearchHandler = () => {
    console.log("click");
  };

  return (
    <div className={"chatChannelsContainer"}>
      <SearchInput
        inputPlaceholder={SEARCH_INPUT_PLACEHOLDER}
        onSearchIconClick={onSearchHandler}
        searchIcon={searchIcon}
      />
      <ChannelsContainer />
    </div>
  );
};
