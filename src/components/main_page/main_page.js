import React from 'react';
import { useHistory } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/register');
    };

    return (
        <div className="main-page">
            <button onClick={handleButtonClick}>Register a School</button>
        </div>
    );
};

export default MainPage;