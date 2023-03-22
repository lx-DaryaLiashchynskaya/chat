import {useState} from "react";
import {callAuthCheck} from "../utils/login.utils";
import {ILoggedUser} from "../types/loggedUser";

export const useSignIn = (
    setLoggedUser: (loggedUser: ILoggedUser) => void
) => {
    const [isSignIn, setIsSignIn] = useState(false);

    callAuthCheck(setIsSignIn,setLoggedUser)

    return isSignIn;
};
