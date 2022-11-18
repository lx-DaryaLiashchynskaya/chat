import { useEffect } from "react";
import { IChannelTemplate } from "../types/channel";
import { findChannelsByName } from "../utils/search.utils";

export const useSearch = (
  data: IChannelTemplate[],
  setFoundedChannels: (foundedChannels: IChannelTemplate[]) => void,
  searchValue: string,
  toggleSearchLoadingState: (isSearchInProgress: boolean) => void
) => {
  useEffect(() => {
    toggleSearchLoadingState(true);

    // mock request on server
    const timerId = setTimeout(() => {
      setFoundedChannels(findChannelsByName(data, searchValue));
      toggleSearchLoadingState(false);
    }, 1000);

    return () => {
      clearTimeout(timerId);
      toggleSearchLoadingState(false);
    };
  }, [searchValue]);
};
