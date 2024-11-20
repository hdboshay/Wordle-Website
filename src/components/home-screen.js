import { Row, Col } from "antd";

function HomeScreen() {
    return (
        <Row gutter={[8, 8]}>
            <Col span={8} offset={8}>Col1</Col>
        </Row>
    );
    }

export default HomeScreen;