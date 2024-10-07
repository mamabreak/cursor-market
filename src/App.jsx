import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterForm from './pages/Register/registerForm';
import LoginForm from './pages/Login/login'
import './App.css'

const App = () => {
    return (
        <div>
            <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/sign-up" />} /> {/* Default redirect to sign-up */}
                <Route path="/sign-up" element={<RegisterForm />} />
                <Route path="/log-in" element={<LoginForm />} />
            </Routes>
        </Router>
        </div>
    );
};

export default App;