import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container">
        <h3>Memory Game</h3>
        <h3>Click an Image to Start</h3>
        <a class="navbar-brand" href="#">Score: {props.children}</a>

        </div>
    </nav>
  )
}

export default NavBar;
