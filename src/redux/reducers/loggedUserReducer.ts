import { initialState } from "./initialState";

export const loggedUserReducer = (state = initialState.loggedUser, action:any) => {
    switch (action.type) {
        case "SET_LOGGED_USER": {
            return {
                ...state,
                info: action.payload,
            };
        }
        default:
            return state;
    }
};
