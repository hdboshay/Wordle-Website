import { React, useState } from 'react';
import HomeScreen from './components/home-screen';
import GameScreen from './components/game-screen';
import './styles/App.css';

function App() {
  const defaults = {
    num_guesses: 3,
    min_guesses: 1,
    max_guesses: 10
  }

  const [totalGuesses, setTotalGuesses] = useState(defaults.num_guesses)
  const [answer, setAnswer] = useState("")
  const [currentGuess, setCurrentGuess] = useState(-1)
  const [isGameActive, setIsGameActive] = useState(false)

  return (
    <div className="App">
      <h1>
        Wordle Game
      </h1>
      <div style={{"display":((isGameActive) ? "none" : "block")}}>
        <HomeScreen defineAnswer={setAnswer} defineTotalGuesses={setTotalGuesses} defaults={defaults} defineCurrentGuess={setCurrentGuess} defineIsGameActive={setIsGameActive} />
      </div>
      
      <div style={{"display":((isGameActive) ? "block" : "none")}}>
        <GameScreen answer={answer} totalGuesses={totalGuesses} currentGuess={currentGuess} defineCurrentGuess={setCurrentGuess}/>
      </div>
    </div>
  );
}

export default App;
