import { combineReducers } from "redux";
import { channelsReducer } from "./channelsReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  channels: channelsReducer,
  search: searchReducer,
});

