import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register/register';
import Login from './pages/Login/login'
import Home from './pages/Home/home'
import './App.css'

const App = () => {
    return (
        <div>
            <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/sign-up" />} /> {/* Default redirect to sign-up */}
                <Route path="/home" element={<Home />} />
                <Route path="/sign-up" element={<Register />} />
                <Route path="/log-in" element={<Login />} />
            </Routes>
        </Router>
        </div>
    );
};

export default App;