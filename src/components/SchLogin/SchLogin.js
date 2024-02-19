import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [schoolId, setSchoolId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://bakend.azurewebsites.net/sch_login', {
                schoolId,
                password,
            });

            if (response.status === 200) {
                sessionStorage.setItem('schoolId', schoolId);
                navigate('/schdashboard');
            } else {
                // Handle error
            }
        } catch (error) {
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                School ID:
                <input type="text" value={schoolId} onChange={(e) => setSchoolId(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Log in" />
        </form>
    );
}

export default LoginPage;