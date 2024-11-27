import { useState } from 'react';
import { Button } from "antd";
import '../styles/game-screen.css';
import AttemptRow from "./attempt-row";

function GameScreen({ answer, totalGuesses, currentGuess, defineCurrentGuess }) {

    const answerLength = answer.length
    const [revealAnswer, setRevealAnswer] = useState(false)
    const [inputGuess, setInputGuess] = useState("")
    const guessRows = []

    for (let i = 0; i < totalGuesses; i++) {
        guessRows.push(
            <li className="attempt-row" key={i}>
                <AttemptRow answerLength={answerLength} defineInputGuess={setInputGuess} isActiveGuess={currentGuess === i}/>
            </li>
        );
    }


    const onClick = () => {
        if (currentGuess + 1 < totalGuesses) {
            if (inputGuess === answer) {
                defineCurrentGuess(-1)
                console.log("correct answer")
            }
            else{
                setInputGuess("")
                defineCurrentGuess(currentGuess + 1)
            }
        }
        else {
            defineCurrentGuess(-1)
            setRevealAnswer(true)
        }
        
    };




    return (
        <div className="game-screen">
            {revealAnswer && <p>The answer was '{answer}'</p>}

            <ul>
                {guessRows}
            </ul>


            <Button id="submit-answer" type="primary" disabled={currentGuess === -1} onClick={onClick}>Submit Guess</Button>
            <Button danger id="reset-game" type="primary" href='index.html'>Reset Game</Button>

        </div>
    );
}

export default GameScreen;