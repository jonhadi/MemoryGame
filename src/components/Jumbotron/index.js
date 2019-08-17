import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Test Your Memory</h1>
            <p className="lead">Click on an image to earn a point, but you can't click the same image twice!</p>
        </div>
    </div>
  );
}

export default Jumbotron;