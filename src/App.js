import React from 'react';
// import Main from './pages/main'; // Ensure the path is correct
import Login from './pages/login'
import './App.css'

const App = () => {
    return (
        <div>
            <Login /> {/* Use the Main component */}
        </div>
    );
};

export default App;