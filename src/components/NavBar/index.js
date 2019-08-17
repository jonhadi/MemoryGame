import React from "react";
import "./style.css";

function NavBar(props) {

  var currentScore = props.children[0];
  var Highscore = props.children[1];
  var message = props.children[2];

  return (
    <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container">
        <h3>Memory Game</h3>
        <h3>{message}</h3>
        <h3>Score: {currentScore} Highscore: {Highscore}</h3>
    
        </div>
    </nav>
  )
}

export default NavBar;
