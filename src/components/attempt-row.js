import { Row, Col, Input } from "antd";
import '../styles/game-screen.css';
import { useState, useEffect } from "react";

function AttemptRow({ rowId, answer, defineInputGuess, currentGuess, colours }) {

    const [ rowGuess, setRowGuess ] = useState("")

    useEffect(() => {
        defineInputGuess(rowGuess);
        // eslint-disable-next-line
    }, [rowGuess] );

    const onChange = async (e) => {
        let letterIndex = e.target.id.split("-")[1]
        setRowGuess(rowGuess.substring(0,letterIndex) + e.target.value + rowGuess.substring(letterIndex+1))
    };

    const guessRow = []
    for (let i = 0; i < answer.length; i++) {

        guessRow.push(
            <li className="letter-input" key={i}>
                <Input id={rowId + "-" + i} style={{background: colours[rowId][i]}} disabled={!(currentGuess === rowId)} maxLength={1} defaultValue={""} onChange={onChange}/>
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