import React from "react";
import "./CircleButton.scss";

interface ICircleButton {
  onAction?: () => void;
  buttonImg: string;
}

export const CircleButton = ({ onAction, buttonImg }: ICircleButton) => {
  return (
    <button onClick={onAction} className={"circleButton"}>
      <img src={buttonImg} className={"circleButtonImage"} alt={""} />
    </button>
  );
};
