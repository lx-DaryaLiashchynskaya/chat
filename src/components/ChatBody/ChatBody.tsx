import React from "react";
import "./ChatBody.scss";

export const ChatBody = () => {
    const onEnterHandler = () => {
        console.log("click");
    };

    return (
        <div className={"chatBodyContainer"}>
            <div className={"chatBody"}>
                Chat
            </div>
        </div>
    );
};
