import React from "react";
import "./CircleButton.scss";

interface ICircleButton {
  onAction?: () => void;
  buttonImg: string;
}

export const CircleButton = ({ onAction, buttonImg }: ICircleButton) => {
  return (
    <img
      onClick={onAction}
      src={buttonImg}
      className={"circleButtonImage"}
      alt={""}
    />
  );
};
