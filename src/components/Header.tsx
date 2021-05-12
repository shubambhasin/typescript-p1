import React from "react";

type headerType = {
  userName: string;
  score: number;
};

export const Header = ({ userName, score }: headerType) => {
  return (
    <>
      {" "}
      <div>
        <h1 className="h1">Quiz Time</h1>
      </div>
      <div className="flex jcc">
        <h3>Player name: {userName}</h3>
        <h3>score: {score}</h3>
      </div>
    </>
  );
};
