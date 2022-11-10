import React, { useState } from "react";
import "./SearchInput.scss";
import { useSearch } from "../../hooks/useSearch";
import { IChannelTemplate } from "../../types/channel";
import { toggleSearchLoadingState } from "../../redux/actions";
import { connect } from "react-redux";

interface ISearchInput {
  inputPlaceholder: string;
  data: IChannelTemplate[];
  setFoundChannels: (foundChannels: IChannelTemplate[]) => void;
  toggleSearchLoadingState: (isSearchInProgress: boolean) => void;
}

export const SearchInput = ({
  inputPlaceholder,
  data,
  setFoundChannels,
  toggleSearchLoadingState,
}: ISearchInput) => {
  const [searchValue, setSearchValue] = useState("");

  useSearch(data, setFoundChannels, searchValue, toggleSearchLoadingState);

  return (
    <div className={"searchInputContainer"}>
      <input
        placeholder={inputPlaceholder}
        className={"searchInput"}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleSearchLoadingState: (isSearchInProgress: boolean) =>
      dispatch(toggleSearchLoadingState(isSearchInProgress)),
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
