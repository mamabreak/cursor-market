import React from 'react';
// import Main from './pages/main'; // Ensure the path is correct
import Login from './pages/Login/login'
import './App.css'
import Header from './pages/Components/header'

const App = () => {
    return (
        <div>
            <Login />
            {/* <Header /> */}
        </div>
    );
};

export default App;