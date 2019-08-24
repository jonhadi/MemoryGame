import React, { Component } from "react";
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import GameBoard from './components/GameBoard';
import characters from "./characters.json";
import './App.css';

class App extends Component {

  //set state variables
  state = {
    characters,
    charactersClicked: [],
    navMessage: "Click an Image to begin!",
    currentScore: 0,
    highScore: 0
  };

  //onclick function
  shuffle = id => {
    //console.log(id);
    var notFound = true; 

    for(let j = 0; j < this.state.charactersClicked.length; j++) {
      if (id === this.state.charactersClicked[j]) {
        //if found set current score to 0 and empty array
        //console.log("id matched!");
        notFound = false;
          this.setState({
            currentScore: 0,
            charactersClicked: [],
            navMessage: "Ozai got you... "
          });
        //if current score is better than highScore update highscore
        if(this.state.currentScore > this.state.highScore) {
          this.setState({
            highScore: this.state.currentScore,
          });
        }
      }
    }

    //if id not found add id to array, update score, and update nav message
    if (notFound) {
      this.state.charactersClicked.push(id);
      this.setState({ 
        currentScore: this.state.currentScore + 1,
        navMessage: "You're mastering the four elements!"
      });
    }

    //shuffle function
    for (let i = characters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [characters[i], characters[j]] = [characters[j], characters[i]]; // swap elements
      this.setState({characters});
    }
  }

  render() {
      return (

    <Wrapper>
    <NavBar>{[this.state.currentScore, this.state.highScore, this.state.navMessage]}</NavBar>
    <Jumbotron>card</Jumbotron>

    <div class="container">
    {this.state.characters.map(characters => (
          <GameBoard
            shuffle={this.shuffle}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
          />
        ))}
    </div>
    </Wrapper>
  );
}
}

export default App;
