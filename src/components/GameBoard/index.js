import React from "react";
import "./style.css";

function GameBoard(props) { 

    // return (
    //     <div class="container">
    return (
        <div id={props.id} class="col-3 image-card "><img onClick={() => props.shuffle(props.id)} alt={props.name} src={props.image}/></div>
    )
}
export default GameBoard;