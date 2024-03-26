import React, { useState } from "react";
import axios from "axios";
import "./SchRegistration.css";

function SchRegistration() {
  const [formData, setFormData] = useState({
    D_NO: "",
    STREET: "",
    AREA: "",
    CITY: "",
    DISTRICT: "",
    STATE: "",
    PIN_CODE: "",
    GEO_TAG: "",
    SCHOOL_NAME: "",
    SYLLABUS_TYPE: "",
    ADH_NAME: "",
    ADH_MOBILE: "",
    ADH_EMAIL: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleGeoTagChange = (event) => {
    if (event.target.name === "GEO_TAG") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setFormData({ ...formData, GEO_TAG: `${latitude}, ${longitude}` });
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://bakend.azurewebsites.net/schregister",
        formData
      );

      if (response.status === 200) {
        console.log("Registration successful", response.data);
      } else {
        // Handle error
        console.error("Registration failed", response);
      }
    } catch (error) {
      // Handle error
      console.error("An error occurred", error);
    }
  };

  return (
    <div className="body1">
      <section class="container">
        <header>Registration Form</header>

        <form action="#" class="form" onSubmit={handleSubmit}>
          <div class="input-box">
            <label>SCHOOL_NAME</label>
            <input
              type="text"
              name="SCHOOL_NAME"
              value={formData.SCHOOL_NAME}
              onChange={handleChange}
            />
          </div>
          <div class="input-box">
            <label>SYLLABUS_TYPE</label>
            <input
              type="text"
              name="SYLLABUS_TYPE"
              value={formData.SYLLABUS_TYPE}
              onChange={handleChange}
            />
          </div>
          <div class="input-box">
            <label>ADH_NAME</label>
            <input
              type="text"
              name="ADH_NAME"
              value={formData.ADH_NAME}
              onChange={handleChange}
            />
          </div>
          <div class="column">
            <div class="input-box">
              <label>ADH_MOBILE</label>
              <input
                type="text"
                name="ADH_MOBILE"
                value={formData.ADH_MOBILE}
                onChange={handleChange}
              />
            </div>
            <div class="input-box">
              <label>ADH_EMAIL</label>
              <input
                type="text"
                name="ADH_EMAIL"
                value={formData.ADH_EMAIL}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="input-box">
            <label>D_NO</label>
            <input
              type="text"
              name="D_NO"
              value={formData.D_NO}
              onChange={handleChange}
            />
          </div>

          <div class="input-box address">
            <label>Address</label>
          <div class="column">
              <div class="input-box">
                <input
                  type="text"
                  name="STREET"
                  placeholder="Enter Street"
                  value={formData.STREET}
                  onChange={handleChange}
                />
              </div>

              <div class="input-box">
                <input
                  type="text"
                  name="AREA"
                  placeholder="Enter Area"
                  value={formData.AREA}
                  onChange={handleChange}
                />
              </div>
            </div>


            <div class="column">
              <div class="input-box">
                <input
                  type="text"
                  name="CITY"
                  placeholder="Enter City"
                  value={formData.CITY}
                  onChange={handleChange}
                />
              </div>

              <div class="input-box">
                <input
                  type="text"
                  name="DISTRICT"
                  placeholder="Enter District"
                  value={formData.DISTRICT}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="column">
            <div class="input-box">
              <input
                type="text"
                name="STATE"
                placeholder="Enter State"
                value={formData.STATE}
                onChange={handleChange}
              />
            </div>

            <div class="input-box">
              <input
                type="text"
                name="PIN_CODE"
                placeholder="Enter Pin Code"
                value={formData.PIN_CODE}
                onChange={handleChange}
              />
            </div>

          </div>
          </div>

          <button onClick={handleGeoTagChange} name="GEO_TAG">
            Capture Current Location
          </button>

          <p>{formData.GEO_TAG}</p>
          <input type="submit" value="Register" />
        </form>
      </section>
    </div>
  );
}

export default SchRegistration;
