import React from "react";

export default function GameArea(props) {
    // console.log(props.item.img);
    return (
        <div
            className={`${
                props.result === "WIN" ? "border-green-400" : "border-gray-300"
            } border-4 rounded-xl max-w-lg mx-4 p-3`}
        >
            <h1 className="text-center mb-3">{props.title}</h1>
            <img
                className="m-auto mb-3 w-10/12"
                src={props.item && props.item.img}
                alt="scissors"
            />
            <h2 className="text-center">{props.result}</h2>
        </div>
    );
}
