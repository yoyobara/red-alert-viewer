import { Container, Tab, Tabs } from 'react-bootstrap';
import "./App.scss"
import MyAlerts from './MyAlerts';

function App() {
    return (
        <Container id='app'>
            <h1>Red Alert Viewer</h1>
            <Tabs defaultActiveKey="My Alerts" fill>
                <Tab title="My Alerts" eventKey="My Alerts">
                    <MyAlerts/>
                </Tab>
                <Tab title="All Alerts" eventKey="All Alerts">

                </Tab>
            </Tabs>
        </Container>
    )
}

export default App;
