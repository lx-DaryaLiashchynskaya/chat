import { ILoggedUser } from "../../types/loggedUser";

export const addChannel = () => {
  return {
    type: "ADD_CHANNEL",
  };
};

export const handleInputChange = (name: string, value: any) => {
  return {
    type: "HANDLE_INPUT_CHANGE",
    payload: { [name]: value },
  };
};

export const toggleSearchLoadingState = (isSearchInProgress: boolean) => {
  return {
    type: "TOGGLE_SEARCH_LOADING_STATE",
    payload: isSearchInProgress,
  };
};

export const setLoggedUser = (loggedUser: ILoggedUser) => {
  return {
    type: "SET_LOGGED_USER",
    payload: loggedUser,
  };
};
