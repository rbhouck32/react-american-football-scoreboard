import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const firstQuarter = 1;
  const [quarter, setQuarter] = useState(firstQuarter);
  const quarterReset = e => {
    setQuarter(firstQuarter);
  };
  const changeQuarter = e => {
    if (quarter <= 3) {
      setQuarter(quarter + 1);
    }
  };

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={changeQuarter}>Change Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
