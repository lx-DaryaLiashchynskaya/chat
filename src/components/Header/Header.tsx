import React from "react";
import "./Header.scss";
import { connect } from "react-redux";
import { ILoggedUser } from "../../types/loggedUser";
import {AccountMenu} from "../AccountMenu/AccountMenu";

const Header = ({ loggedUserInfo }: { loggedUserInfo: null | ILoggedUser }) => {
  return (
    <header className={"header"}>
      <span className={"logo"}>ChitChat</span>
      {loggedUserInfo ? (
      <AccountMenu/>
      ) : null}
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loggedUserInfo: state.loggedUser.info,
  };
};

export default connect(mapStateToProps, null)(Header);
