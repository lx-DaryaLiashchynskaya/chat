import React, { useState } from "react";
import "./AccountMenu.scss";
import { CircleButton } from "../../lego-ui/CircleButton/CircleButton";
import { account } from "../../assets/icons";
import { authSignOut } from "../../firebase/firebaseGoogleAuth";
import { TooltipMenu } from "../../lego-ui/TooltipMenu/TooltipMenu";

const SIGN_OUT_TEXT='Sign out';

export const AccountMenu = () => {
  const [isMenuShowed, setIsMenuShowed] = useState(false);

  const toggleTooltipMenuShow = () => {
    setIsMenuShowed((isMenuShowed) => !isMenuShowed);
  };

  const leaveAccount=()=>{
    setIsMenuShowed(false);
    authSignOut();
  }

  return (
    <div className={'accountTooltipContainer'}>
      <CircleButton onAction={toggleTooltipMenuShow} buttonImg={account} />
      {isMenuShowed ? (
        <TooltipMenu>
          <div className={'signOutButton'} onClick={leaveAccount}>{SIGN_OUT_TEXT}</div>
        </TooltipMenu>
      ) : null}
    </div>
  );
};
