import { combineReducers } from "redux";
import { channelsReducer } from "./channelsReducer";
import { searchReducer } from "./searchReducer";
import { loggedUserReducer } from "./loggedUserReducer";

export const rootReducer = combineReducers({
  channels: channelsReducer,
  search: searchReducer,
  loggedUser: loggedUserReducer,
});
