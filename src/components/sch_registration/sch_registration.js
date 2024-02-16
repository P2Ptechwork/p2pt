import React, { useState } from 'react';
import './sch_registration.css';

const RegistrationPage = () => {
    const [schoolName, setSchoolName] = useState('');
    const [address, setAddress] = useState('');
    const [adminHeadName, setAdminHeadName] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send this data to your backend
        console.log({ schoolName, address, adminHeadName, mobile });
    };

    return (
        <form className="registration-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="School Name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} required />
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <input type="text" placeholder="Administration Head Name" value={adminHeadName} onChange={(e) => setAdminHeadName(e.target.value)} required />
            <input type="tel" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationPage;