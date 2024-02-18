import React, { useState } from 'react';
import axios from 'axios';

function SchRegistration() {
  const [formData, setFormData] = useState({
    D_NO: '',
    STREET: '',
    AREA: '',
    CITY: '',
    DISTRICT: '',
    STATE: '',
    PIN_CODE: '',
    GEO_TAG: '',
    SCHOOL_NAME: '',
    SYLLABUS_TYPE: '',
    ADH_NAME: '',
    ADH_MOBILE: '',
    ADH_EMAIL: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/schregister', formData);

      if (response.status === 200) {
        console.log('Registration successful', response.data);
      } else {
        // Handle error
        console.error('Registration failed', response);
      }
    } catch (error) {
      // Handle error
      console.error('An error occurred', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        SCHOOL_NAME:
        <input type="text" name="SCHOOL_NAME" value={formData.SCHOOL_NAME} onChange={handleChange} />
      </label>
      <label>
        SYLLABUS_TYPE:
        <input type="text" name="SYLLABUS_TYPE" value={formData.SYLLABUS_TYPE} onChange={handleChange} />
      </label>

      <label>
        ADH_NAME:
        <input type="text" name="ADH_NAME" value={formData.ADH_NAME} onChange={handleChange} />
      </label>
      <label>
        ADH_MOBILE:
        <input type="text" name="ADH_MOBILE" value={formData.ADH_MOBILE} onChange={handleChange} />
      </label>
      <label>
        ADH_EMAIL:
        <input type="text" name="ADH_EMAIL" value={formData.ADH_EMAIL} onChange={handleChange} />
      </label>
      <label>
        D_NO:
        <input type="text" name="D_NO" value={formData.D_NO} onChange={handleChange} />
      </label>
      <label>
        STREET:
        <input type="text" name="STREET" value={formData.STREET} onChange={handleChange} />
      </label>
      <label>
        AREA:
        <input type="text" name="AREA" value={formData.AREA} onChange={handleChange} />
      </label>
      <label>
        CITY:
        <input type="text" name="CITY" value={formData.CITY} onChange={handleChange} />
      </label>
      <label>
        DISTRICT:
        <input type="text" name="DISTRICT" value={formData.DISTRICT} onChange={handleChange} />
      </label>
      <label>
        STATE:
        <input type="text" name="STATE" value={formData.STATE} onChange={handleChange} />
      </label>
      <label>
        PIN_CODE:
        <input type="text" name="PIN_CODE" value={formData.PIN_CODE} onChange={handleChange} />
      </label>
      <label>
        GEO_TAG:
        <input type="text" name="GEO_TAG" value={formData.GEO_TAG} onChange={handleChange} />
      </label>
      <input type="submit" value="Register" />
    </form>
  );
}

export default SchRegistration;