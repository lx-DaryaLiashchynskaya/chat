import { initialState } from "./initialState";

export const searchReducer = (state = initialState.search, action:any) => {
  switch (action.type) {
    case "TOGGLE_SEARCH_LOADING_STATE": {
      return {
        ...state,
        isContactFormHidden: !state.isSearchInProgress,
      };
    }
    default:
      return state;
  }
};
