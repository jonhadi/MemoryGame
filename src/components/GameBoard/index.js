import React from "react";
import "./style.css";

function GameBoard(props) { 

    return (
        <div id={props.id} className="image-card col-3">
            <img className="card-img-top" onClick={() => props.shuffle(props.id)} src={props.image} alt={props.name} />
        </div>

    )
}
export default GameBoard;