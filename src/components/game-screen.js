import { Row, Col } from "antd";
import { React, useState } from 'react';
import { Input, Button } from 'antd';
import '../styles/game-screen.css';

function GameScreen({ answer, totalGuesses }) {

    const answerLength = answer.length


    return (
        <div className="game-screen">
            <p>
                remove debug text for guesses and answer before finishing!!!! {answer} {totalGuesses} {answerLength}
            </p>

            <div className="layout-row">
                <Row gutter={[8, 8]}>
                    <Col span={16} offset={4}>
                        <div className="letter-input">
                            <Input maxLength={1} defaultValue={""} onChange={(e) => console.log(e.target.value)}/>
                        </div>
                        <div className="letter-input">
                            <Input maxLength={1} defaultValue={""} onChange={(e) => console.log(e.target.value)}/>
                        </div>
                        <div className="letter-input">
                            <Input maxLength={1} defaultValue={""} onChange={(e) => console.log(e.target.value)}/>
                        </div>
                        <div className="letter-input">
                            <Input maxLength={1} defaultValue={""} onChange={(e) => console.log(e.target.value)}/>
                        </div>
                        <div className="letter-input">
                            <Input maxLength={1} defaultValue={""} onChange={(e) => console.log(e.target.value)}/>
                        </div>
                        <div className="letter-input">
                            <Input maxLength={1} defaultValue={""} onChange={(e) => console.log(e.target.value)}/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default GameScreen;