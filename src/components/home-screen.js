import { Row, Col } from "antd";
import { Input, InputNumber, Button } from 'antd';
import '../styles/home-screen.css';
import { useState } from "react";

function HomeScreen({defineAnswer, defineTotalGuesses, defaults, defineCurrentGuess, defineIsGameActive}) {

    const [ unlockInputs, setUnlockInputs] = useState(true)
    const [ inputAnswer, setInputAnswer] = useState("")
    const [ errorMsg, setErrorMsg] = useState("")

    const onClick = () => {
        if (inputAnswer.length === 0) {
            setErrorMsg("Please enter a word before continuing!!")
        }
        else{
            setErrorMsg("")
            defineAnswer(inputAnswer)
            defineCurrentGuess(0)
            setUnlockInputs(false)
            defineIsGameActive(true)
        }
    };

    return (
        <div>
            <div className="layout-row">
                <Row gutter={[8, 8]}>
                    <Col span={8} offset={8}>
                        <p>enter word:</p> 
                        <Input disabled={!unlockInputs} placeholder="enter word" defaultValue={""} onChange={(e) => setInputAnswer(e.target.value)}/>
                    </Col>
                </Row>
            </div>

            <div className="layout-row">
                <Row gutter={[8, 8]}>
                    <Col span={8} offset={8}>
                        <p>number of guesses (min: {defaults.min_guesses}, max: {defaults.max_guesses}):</p> 
                        <InputNumber disabled={!unlockInputs} min={defaults.min_guesses} max={defaults.max_guesses} defaultValue={defaults.num_guesses} onChange={(value) => defineTotalGuesses(value)}/>
                    </Col>
                </Row>
            </div>

            <div className="layout-row">
                <Row gutter={[8, 8]}>
                    <Col span={8} offset={8}>
                        {errorMsg && <p>{errorMsg}</p>}
                        <Button disabled={!unlockInputs} type="primary" onClick={onClick}>Start Game</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
    }

export default HomeScreen;