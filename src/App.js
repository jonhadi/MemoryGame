import React from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import GameBoard from './components/GameBoard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Wrapper>
    <NavBar>This Item</NavBar>
    <Jumbotron>Card</Jumbotron>
    <GameBoard></GameBoard>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Wrapper>
  );
}

export default App;
