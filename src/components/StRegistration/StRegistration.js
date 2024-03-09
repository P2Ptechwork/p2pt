import React from "react";
import axios from "axios";

class St_registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SCHOOL_ID: "",
      STUDENT_NAME: "",
      GRADE: "",
      SECTION: "",
      AADHAR_NO: "",
      GUARDIAN_NAME: "",
      RELATION: "",
      GUARDIAN_MOBILE: "",
      GUARDIAN_EMAIL: "",
      DOC_ID: "",
      D_NO: "",
      STREET: "",
      AREA: "",
      CITY: "",
      DISTRICT: "",
      STATE: "",
      PIN_CODE: "",
    };
  }
  componentDidMount() {
    const schoolId = sessionStorage.getItem("schoolId");
    if (schoolId) {
      this.setState({ SCHOOL_ID: schoolId });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://bakend.azurewebsites.net/st_register", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  render() {
    return (
      <div className="body1">
        <section class="container">
          <header>Student Registration Form</header>
          <form action="#" class="form" onSubmit={this.handleSubmit}>

          <div class="column">
            <div class="input-box" controlId="formSchoolId">
              <label>School ID</label>
              <input
                type="text"
                placeholder="Enter School ID"
                name="SCHOOL_ID"
                value={this.state.SCHOOL_ID}
                readOnly
              />
            </div>

            <div class="input-box" controlId="formStudentName">
              <label>Student Name</label>
              <input
                type="text"
                placeholder="Enter Student Name"
                name="STUDENT_NAME"
                onChange={this.handleChange}
                required
              />
            </div>
            </div>

            <div class="column">
            <div class="input-box" controlId="formGrade">
              <label>Grade</label>
              <input
                type="text"
                placeholder="Enter Grade"
                name="GRADE"
                onChange={this.handleChange}
                required
              />
            </div>

            <div class="input-box" controlId="formSection">
              <label>Section</label>
              <input
                type="text"
                placeholder="Enter Section"
                name="SECTION"
                onChange={this.handleChange}
              />
            </div>
            </div>
            <div class="input-box" controlId="formAadharNo">
              <label>Aadhar No</label>
              <input
                type="number"
                placeholder="Enter Aadhar No"
                name="AADHAR_NO"
                onChange={this.handleChange}
              />
            </div>

            <div class="input-box" controlId="formGuardianName">
              <label>Guardian Name</label>
              <input
                type="text"
                placeholder="Enter Guardian Name"
                name="GUARDIAN_NAME"
                onChange={this.handleChange}
                required
              />
            </div>

            <div class="input-box" controlId="formRelation">
              <label>Relation</label>
              <input
                type="text"
                placeholder="Enter Relation"
                name="RELATION"
                onChange={this.handleChange}
              />
            </div>

            <div class="input-box" controlId="formGuardianMobile">
              <label>Guardian Mobile</label>
              <input
                type="text"
                placeholder="Enter Guardian Mobile"
                name="GUARDIAN_MOBILE"
                onChange={this.handleChange}
                required
              />
            </div>

            <div class="input-box" controlId="formGuardianEmail">
              <label>Guardian Email</label>
              <input
                type="email"
                placeholder="Enter Guardian Email"
                name="GUARDIAN_EMAIL"
                onChange={this.handleChange}
                required
              />
            </div>

            <div class="input-box" controlId="formDocId">
              <label>Document ID</label>
              <input
                type="text"
                placeholder="Enter Document ID"
                name="DOC_ID"
                onChange={this.handleChange}
              />
            </div>

            <div class="input-box" controlId="formDNo">
              <label>D No</label>
              <input
                type="text"
                placeholder="Enter D No"
                name="D_NO"
                onChange={this.handleChange}
              />
            </div>

            <div class="input-box address">
            <label>Address</label>
            <div class="column">
            <div class="input-box" controlId="formStreet">
              <label>Street</label>
              <input
                type="text"
                placeholder="Enter Street"
                name="STREET"
                onChange={this.handleChange}
                required
              />
            </div>

            <div class="input-box" controlId="formArea">
              <label>Area</label>
              <input
                type="text"
                placeholder="Enter Area"
                name="AREA"
                onChange={this.handleChange}
              />
            </div>
            </div>
            <div class="column">
            <div class="input-box" controlId="formCity">
              <label>City</label>
              <input
                type="text"
                placeholder="Enter City"
                name="CITY"
                onChange={this.handleChange}
              />
            </div>

            <div class="input-box" controlId="formDistrict">
              <label>District</label>
              <input
                type="text"
                placeholder="Enter District"
                name="DISTRICT"
                onChange={this.handleChange}
              />
            </div>
            </div>
            <div class="column">
            <div class="input-box" controlId="formState">
              <label>State</label>
              <input
                type="text"
                placeholder="Enter State"
                name="STATE"
                onChange={this.handleChange}
                required
              />
            </div>

            <div class="input-box" controlId="formPinCode">
              <label>Pin Code</label>
              <input
                type="text"
                placeholder="Enter Pin Code"
                name="PIN_CODE"
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
            </div>

            <button variant="primary" type="submit">
              Register
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default St_registration;
