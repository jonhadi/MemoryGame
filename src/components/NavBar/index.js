import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container">
        <h3>Memory Game</h3>
        <h3>Click an Image to Start</h3>
        <a class="navbar-brand" href="github.com">Score: {props.children.currentScore} Highscore: {props.children.highScore}</a>

        </div>
    </nav>
  )
}

export default NavBar;
