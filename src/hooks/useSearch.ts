import { useEffect } from "react";
import { IChannelTemplate } from "../types/channel";
import {findChannelsByName} from "../utils/search.utils";

export const useSearch = (
  data: IChannelTemplate[],
  setFoundedChannels: (foundedChannels: IChannelTemplate[]) => void,
  searchValue: string
) => {
  useEffect(() => {
    // mock request on server
    const timerId = setTimeout(() => {
      setFoundedChannels(findChannelsByName(data, searchValue));
    }, 1000);

    return () => clearTimeout(timerId);
  }, [searchValue]);
};
