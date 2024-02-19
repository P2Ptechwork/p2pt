import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function RegisterPage() {
    const navigate = useNavigate();

    const handleTeacherRegister = () => {
        navigate('/tregister');
    };

    const handleStudentRegister = () => {
        navigate('/stregister');
    };

    return (
        <div>
            <Button onClick={handleTeacherRegister}>Register a Teacher</Button>
            <Button onClick={handleStudentRegister}>Register a Student</Button>
        </div>
    );
}

export default RegisterPage;