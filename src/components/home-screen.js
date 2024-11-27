import { Row, Col } from "antd";
import { Input, InputNumber, Button } from 'antd';
import '../styles/home-screen.css';

function HomeScreen({defineAnswer, defineTotalGuesses, defaults}) {

    const onClick = () => {
        console.log('clicked');
    };

    return (
        <div>
            <div className="layout-row">
                <Row gutter={[8, 8]}>
                    <Col span={8} offset={8}>
                        <p>enter word:</p> 
                        <Input placeholder="enter word" defaultValue={""} onChange={(e) => defineAnswer(e.target.value)}/>
                    </Col>
                </Row>
            </div>

            <div className="layout-row">
                <Row gutter={[8, 8]}>
                    <Col span={8} offset={8}>
                        <p>number of guesses:</p> 
                        <InputNumber min={defaults.min_guesses} max={defaults.max_guesses} defaultValue={defaults.num_guesses} onChange={(value) => defineTotalGuesses(value)}/>
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