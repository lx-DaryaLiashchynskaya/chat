import { initialState } from "./initialState";

export const channelsReducer = (state = initialState.channels, action:any) => {
  switch (action.type) {
    case "ADD_CHANNEL": {
      return {
        ...state,
        channelsList: [...state.channelsList, state.newChannel],
      };
    }
      case "HANDLE_INPUT_CHANGE": {
          return {
              ...state, newChannel: {
                  ...state.newChannel, ...action.payload }
          }
      }
    default:
      return state;
  }
};
