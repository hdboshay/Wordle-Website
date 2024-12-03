import { useState } from 'react';
import { Button } from "antd";
import '../styles/game-screen.css';
import AttemptRow from "./attempt-row";

function GameScreen({ answer, totalGuesses, currentGuess, defineCurrentGuess }) {

    const [revealAnswer, setRevealAnswer] = useState(false)
    const [inputGuess, setInputGuess] = useState("")
    const [colours, setColours] = useState(new Array(totalGuesses).fill(new Array(answer.length).fill("")));

    const guessRows = []
    for (let i = 0; i < totalGuesses; i++) {
        guessRows.push(
            <li className="attempt-row" key={i}>
                <AttemptRow rowId={i} answer={answer} defineInputGuess={setInputGuess} currentGuess={currentGuess} colours={colours}/>
            </li>
        );
    }

    const onClick = () => {
        let tempArray = colours
        tempArray[currentGuess] = getRowColour()
        setColours(tempArray)

        if (currentGuess < totalGuesses) {
            //correct answer
            if (inputGuess === answer) {
                defineCurrentGuess(-1)
            }
            //all guesses used, still wrong
            else if (currentGuess + 1 === totalGuesses) {
                defineCurrentGuess(-1)
                setRevealAnswer(true)
            }
            //next guess
            else {
                setInputGuess("")
                defineCurrentGuess(currentGuess + 1)
            }
        }
    };

    const getRowColour = () => {
        let rowColours = []
        let checkedIndex = []

        //finds all the green letters then removes them from the checks
        for (let i = 0; i < inputGuess.length; i++) {
            let letter = inputGuess.split("")[i]
            let letterIndex = i

            if (letter === answer[letterIndex]) {
                rowColours[i] = "green"
                checkedIndex.push(i)
            }
        }

        //checks for all the yellow letters
        for (let i = 0; i < inputGuess.length; i++) {
            let letter = inputGuess[i]
            let letterIndex = i

            //gets the number of current letter in the answer
            let answerLetterCount = 0
            for (let i = 0; i < answer.length; i++) {
                if (answer[i] === letter && !checkedIndex.includes(i)) {
                    answerLetterCount += 1
                }
            }

            //gets the number of current letter in the guess
            let guessLetterCount = 0
            for (let i = 0; i < letterIndex + 1; i++) {
                if (inputGuess[i] === letter && !checkedIndex.includes(i)) {
                    guessLetterCount += 1
                }
            }

            if (guessLetterCount <= answerLetterCount && !checkedIndex.includes(i)) {
                rowColours[i] = "yellow"
            }
        }

        return rowColours
    }

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