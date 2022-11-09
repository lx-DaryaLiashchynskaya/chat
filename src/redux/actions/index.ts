export const addChannel = () => {
  return {
    type: "ADD_CHANNEL",
  };
};

export const handleInputChange = (name: string, value:any) => {
  return {
    type: "HANDLE_INPUT_CHANGE",
    payload: { [name]: value },
  };
};

export const toggleSearchLoadingState = () => {
  return {
    type: "TOGGLE_SEARCH_LOADING_STATE",
  };
};
