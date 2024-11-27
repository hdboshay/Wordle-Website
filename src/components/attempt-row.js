import { Row, Col, Input } from "antd";
import '../styles/game-screen.css';
import { useState, useEffect } from "react";

function AttemptRow({ answerLength, defineInputGuess, isActiveGuess }) {

    const [ rowGuess, setRowGuess ] = useState("")

    useEffect(() => {
        defineInputGuess(rowGuess);
        // eslint-disable-next-line
    }, [rowGuess] );

    const onChange = async (e) => {
        setRowGuess(rowGuess.substring(0,e.target.id) + e.target.value + rowGuess.substring(e.target.id+1))
    };

    const guessRow = []

    for (let i = 0; i < answerLength; i++) {
        guessRow.push(
            <li className="letter-input" key={i}>
                <Input id={i} disabled={!isActiveGuess} maxLength={1} defaultValue={""} onChange={onChange}/>
            </li>
        );
    }

    return (
        <div className="attempt-row">
            <div className="layout-row">
                <Row gutter={[8, 8]}>
                    <Col span={16} offset={4}>
                        <ul>
                            {guessRow}
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AttemptRow;