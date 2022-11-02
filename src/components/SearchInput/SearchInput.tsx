import React from "react";
import "./SearchInput.scss";

interface ISearchInput {
  searchIcon: string;
  inputPlaceholder: string;
  onSearchIconClick: () => void;
}

export const SearchInput = ({
  searchIcon,
  inputPlaceholder,
  onSearchIconClick,
}: ISearchInput) => {
  return (
    <div className={"searchInputContainer"}>
      <input placeholder={inputPlaceholder} className={"searchInput"} />
      <button onClick={onSearchIconClick} className={"searchIconContainer"}>
        <img alt={""} src={searchIcon} className={"searchIcon"} />
      </button>
    </div>
  );
};
