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
    scores: {
      currentScore: 0,
      highScore: 0
    }
  };

  shuffle = id => {
    console.log(id);

    this.setState({ score: this.state.scores.currentScore + 1 });

    for (let i = characters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [characters[i], characters[j]] = [characters[j], characters[i]]; // swap elements
      this.setState({characters});
    }
  }


  render() {
      return (

    <Wrapper>
    <NavBar>{this.state.scores}</NavBar>
    <Jumbotron>card</Jumbotron>

    
    {this.state.characters.map(characters => (
          <GameBoard
            shuffle={this.shuffle}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
          />
        ))}
    </Wrapper>
  );
}
}

export default App;
