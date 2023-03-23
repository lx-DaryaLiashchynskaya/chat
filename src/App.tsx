import React from "react";
import "./App.scss";
import "./styles/scrollbar.scss";
import Header from "./components/Header/Header";
import { BodyContainer } from "./components/BodyContainer/BodyContainer";
import { Loader } from "./components/Loader/Loader";
import { setLoggedUser } from "./redux/actions";
import { connect } from "react-redux";
import { ILoggedUser } from "./types/loggedUser";
import {useSignIn} from "./hooks/useSignIn";

function App({
  setLoggedUser,
}: {
  setLoggedUser: (loggedUser: ILoggedUser) => void;
}) {
  const isSignIn = useSignIn(setLoggedUser);

  return (
    <div className="body">
      <Header />
      {isSignIn ? (
        <BodyContainer />
      ) : (
        <Loader containerClassName={"authenticationLoader"} />
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setLoggedUser: (loggedUser: ILoggedUser) =>
      dispatch(setLoggedUser(loggedUser)),
  };
};

export default connect(null, mapDispatchToProps)(App);
