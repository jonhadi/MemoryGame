import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Test Your Memory</h1>
            <p class="lead">Click on an image to earn a point, but you can't click the same image twice!</p>
        </div>
    </div>
  );
}

export default Jumbotron;