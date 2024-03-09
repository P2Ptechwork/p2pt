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
      <div className="body1">
      <section class="container">
        <header>Login Form</header>
        <form action="#" class="form" onSubmit={handleSubmit}>
        <div class="input-box">
            <label>School ID</label>
            <input type="text" value={schoolId} onChange={(e) => setSchoolId(e.target.value)} />
            
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
            <button type="submit" value="Log in">Login</button>
        </form>
        </section>
        </div>
    );
}

export default LoginPage;