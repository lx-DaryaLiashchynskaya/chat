import React from "react";
import "./TooltipMenu.scss";

interface ITooltipMenu {
    children: React.ReactNode
}

export const TooltipMenu = ({ children }: ITooltipMenu) => {
  return <div className={'tooltip'}>{children}</div>;
};
