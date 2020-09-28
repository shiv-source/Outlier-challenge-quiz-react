import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function RenderResult(props) {
  const userResult = JSON.parse(localStorage.getItem("userResult"));
  if (userResult) {
    console.log(userResult);
    const correctPrectentage = () => {
      return ((userResult.correct / userResult.total) * 100).toFixed(2);
    };
    return (
      <div className="result mt-5">
        <div className="row">
          <div className="col">
            <h4> Total Questions : </h4>
          </div>
          <div className="col">
            <h4>{userResult.total}</h4>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <h4> Total Correct : </h4>
          </div>
          <div className="col">
            <h4>{userResult.correct}</h4>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <h4> Total Percentage : </h4>
          </div>
          <div className="col">
            <h4>{correctPrectentage()} %</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="errorMsg mt-5">
          <h2>Currently you are not given any test.</h2>
        </div>
      </div>
    );
  }
}

function RenderCompleted(props) {
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-title mt-5">
          <div style={{ color: "Blue", textAlign: "center" }}>
            <h2>User Result Dashboard </h2>
            <span>_______________________________________________________</span>
          </div>
        </div>
        <div>
          <RenderResult />
        </div>
        <Link to="/home">
          <Button className="mt-5" id="backToHmeBtn" color="success">
            <span className="fa fa-home fa-lg"></span> Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default RenderCompleted;
