import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function RenderCompleted(props) {
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-title mt-5">
          <h4 style={{color : 'green', textAlign : 'center'}}>Your Test Completed Successfully.</h4>
        </div>
        <Link to="/home">
          <Button id="nextQuestion" color="success" >
            <span className="fa fa-home fa-lg"></span> Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default RenderCompleted;
