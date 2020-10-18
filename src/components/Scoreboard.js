import React from "react";

export default function Scoreboard(props) {
  const { currentScore, bestScore } = props;

  return (
    <div className="row justify-content-center">
      <h6 className="col-md-6 col-sm-6 text-center score">
        Current Score: <span className="h4">{currentScore}</span>{" "}
      </h6>
      <h6 className="col-md-6 col-sm-6 text-center score">
        Best Score: <span className="h4">{bestScore}</span>
      </h6>
    </div>
  );
}
