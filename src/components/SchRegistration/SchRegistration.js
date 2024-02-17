import React, { useState } from 'react';
import axios from 'axios';

function SchRegistration() {
    const [formData, setFormData] = useState({
        name: '',
        head_name: '',
        address: '',
        head_email: '',
        head_mobile: ''
    });
// jhg

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/schools/', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Register School</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="School Name" onChange={handleChange} />
        <input type="text" name="head_name" placeholder="Head Name" onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} />
        <input type="email" name="head_email" placeholder="Head Email" onChange={handleChange} />
        <input type="tel" name="head_mobile" placeholder="Head Mobile" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SchRegistration;