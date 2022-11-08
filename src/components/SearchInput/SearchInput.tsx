import React, { useState } from "react";
import "./SearchInput.scss";
import { useSearch } from "../../hooks/useSearch";
import { IChannelTemplate } from "../../types/channel";

interface ISearchInput {
  inputPlaceholder: string;
  data: IChannelTemplate[];
  setFoundChannels: (foundChannels: IChannelTemplate[]) => void;
}

export const SearchInput = ({
  inputPlaceholder,
  data,
  setFoundChannels,
}: ISearchInput) => {
  const [searchValue, setSearchValue] = useState("");

  useSearch(data, setFoundChannels, searchValue);

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
