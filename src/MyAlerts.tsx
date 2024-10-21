import { Card, Row } from "react-bootstrap";

const RED_ALERT_URL = "https://api.tzevaadom.co.il/notifications";

function MyAlerts() {
    return (
        <Row className="d-flex">
        </Row>
    )
}

interface AlertProps {
    cityName: string,
    time: Date
}

function Alert({cityName, time}: AlertProps) {
    return (
        <div className="col-4 p-3"> 
            <Card>
                <Card.Img variant="top" src="/alert.jpg"/>
                <Card.Body>
                    <Card.Title>{cityName}</Card.Title>
                    <Card.Subtitle>{time?.toTimeString()}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyAlerts;
