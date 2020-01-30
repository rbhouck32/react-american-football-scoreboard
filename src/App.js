//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const initialLionScore = 0;
  const initialTigerScore = 0;

  const onClickTouchdownHandlerHome = () => setLionScore(lionScore + 7);
  const onClickTouchdownHandlerAway = () => setTigerScore(tigerScore + 7);

  const onClickFieldGoalHandlerHome = () => setLionScore(lionScore + 3);
  const onClickFieldGoalHandlerAway = () => setTigerScore(tigerScore + 3);

  const onClickResetScoreHandlerHome = () => {
    setLionScore(initialLionScore);
  };

  const onClickResetScoreHandlerAway = () => {
    setTigerScore(initialTigerScore);
  };

  const [lionScore, setLionScore] = useState(initialLionScore);
  const [tigerScore, setTigerScore] = useState(initialTigerScore);
  const [quarter, setQuarter] = useState();

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={onClickTouchdownHandlerHome}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={onClickFieldGoalHandlerHome}
          >
            Home Field Goal
          </button>
          <button
            className="homeButtons__reset"
            onClick={onClickResetScoreHandlerHome}
          >
            {" "}
            Reset Score!{" "}
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={onClickTouchdownHandlerAway}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={onClickFieldGoalHandlerAway}
          >
            Away Field Goal
          </button>
          <button
            className="awayButtons__reset"
            onClick={onClickResetScoreHandlerAway}
          >
            {" "}
            Reset Score!{" "}
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
