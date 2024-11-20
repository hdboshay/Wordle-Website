import { Row, Col } from "antd";
import { React, useState } from 'react';
import { Input, InputNumber, Button } from 'antd';
import '../styles/home-screen.css';

function HomeScreen() {
    const defaults = {
        num_guesses: 3,
        min_guesses: 1,
        max_guesses: 10
    }

    const [totalGuesses, setTotalGuesses] = useState(defaults.num_guesses)
    const [answer, setAnswer] = useState("")

    const onClick = () => {
        console.log('clicked');
    };

    return (
        <div>
            <p>
                remove debug text for guesses and answer before finishing!!!!
            </p>

            <div className="layout-row">
                <Row gutter={[8, 8]}>
                    <Col span={8} offset={8}>
                        <p>enter word: {answer}</p> 
                        <Input placeholder="enter word" defaultValue={""} onChange={(e) => setAnswer(e.target.value)}/>
                    </Col>
                </Row>
            </div>

            <div className="layout-row">
                <Row gutter={[8, 8]}>
                    <Col span={8} offset={8}>
                        <p>number of guesses: {totalGuesses}</p> 
                        <InputNumber min={defaults.min_guesses} max={defaults.max_guesses} defaultValue={defaults.num_guesses} onChange={(value) => setTotalGuesses(value)}/>
                    </Col>
                </Row>
            </div>

            <div className="layout-row">
                <Row gutter={[8, 8]}>
                    <Col span={8} offset={8}>
                        <Button type="primary" onClick={onClick}>Start Game</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
    }

export default HomeScreen;