import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AllAlerts from './pages/AllAlerts';
import MyAlerts from './pages/MyAlerts';
import MyNavBar from './pages/MyNavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MyNavBar/>}>
                <Route index element={<Navigate to="/all_alerts"/>}/>
                <Route path="all_alerts" element={<AllAlerts/>}/>
                <Route path="my_alerts" element={<MyAlerts/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
