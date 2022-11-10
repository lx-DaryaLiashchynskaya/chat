import React from "react";
import "./Loader.scss";

export const Loader = ({
  containerClassName,
}: {
  containerClassName: string;
}) => {
  return (
    <div className={containerClassName}>
      <div className={"loader"} />
    </div>
  );
};
