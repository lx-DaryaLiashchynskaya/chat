import { IChannelTemplate } from "../types/channel";

const deleteSpaceInString = (string: string) => string.replace(/ /g, "");

export const findChannelsByName = (
  channelsData: IChannelTemplate[],
  searchValue: string
) => {
  return channelsData.filter((channel) =>
    deleteSpaceInString(channel.name)
      .toUpperCase()
      .includes(searchValue.toUpperCase())
  );
};
