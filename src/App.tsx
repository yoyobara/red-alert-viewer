import { Tab, Tabs } from 'react-bootstrap';
import "./App.scss"
import MyAlerts from './MyAlerts';

function App() {
    return (
        <Tabs defaultActiveKey="My Alerts">
            <Tab title="My Alerts" eventKey="My Alerts">
                <MyAlerts/>
            </Tab>
            <Tab title="All Alerts" eventKey="All Alerts">

            </Tab>
        </Tabs>
    )
}

export default App;
