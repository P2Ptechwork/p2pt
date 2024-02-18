import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main_page.css';

const MainPage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/schregister');
    };

    return (
        <div className="main-page">
            <button onClick={handleButtonClick}>Register a School</button>
        </div>
    );
};

export default MainPage;