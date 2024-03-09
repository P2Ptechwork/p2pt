import React from "react";
import axios from "axios";
import "./TeaRegister.css";

class TeacherRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SCHOOL_ID: "",
      TEACHER_NAME: "",
      QUALIFICATION: "",
      AADHAR_NO: "",
      TEACHER_MOBILE: "",
      TEACHER_EMAIL: "",
      DOC_ID: "",
      D_NO: "",
      STREET: "",
      AREA: "",
      CITY: "",
      DISTRICT: "",
      STATE: "",
      PIN_CODE: "",
      SUBJECTS: [],
      TEMP_SUBJECTS: [],
      showSubjects: false,
    };
  }
  toggleShowSubjects = () => {
    this.setState((prevState) => ({ showSubjects: !prevState.showSubjects }));
  };
  componentDidMount() {
    const schoolId = sessionStorage.getItem("schoolId");
    if (schoolId) {
      this.setState({ SCHOOL_ID: schoolId });
    }
  }

  handleSubjectsChange = (event) => {
    const subjects = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    this.setState({ TEMP_SUBJECTS: subjects });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  addSubjects = () => {
    this.setState((prevState) => ({
      SUBJECTS: [...prevState.SUBJECTS, ...prevState.TEMP_SUBJECTS],
      TEMP_SUBJECTS: [],
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://7931-115-98-50-151.ngrok-free.app/tregister", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  render() {
    console.log(this.state.TEMP_SUBJECTS);
    return (
      <div className="body1">
        <section class="container">
          <header>Teacher Registration Form</header>
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
            <div class="input-box" controlId="formTeacherName">
              <label>Teacher Name</label>
              <input
                type="text"
                placeholder="Enter Teacher Name"
                name="TEACHER_NAME"
                onChange={this.handleChange}
                required
              />
            </div>
            </div>

            <div class="column">
            <div class="input-box" controlId="formQualification">
              <label>Qualification</label>
              <input
                type="text"
                placeholder="Enter Qualification"
                name="QUALIFICATION"
                onChange={this.handleChange}
                required
              />
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
            </div>

            <div class="column">
            <div class="input-box" controlId="formTeacherMobile">
              <label>Teacher Mobile</label>
              <input
                type="text"
                placeholder="Enter Teacher Mobile"
                name="TEACHER_MOBILE"
                onChange={this.handleChange}
                required
              />
            </div>

            <div class="input-box" controlId="formTeacherEmail">
              <label>Teacher Email</label>
              <input
                type="email"
                placeholder="Enter Teacher Email"
                name="TEACHER_EMAIL"
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
            <div class="column">
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
              />
            </div>

            <div class="input-box" controlId="formPinCode">
              <label>Pin Code</label>
              <input
                type="text"
                placeholder="Enter Pin Code"
                name="PIN_CODE"
                onChange={this.handleChange}
              />
            </div>
            </div>
            </div>
            <div class="input-box" >
            <label>Subjects</label>
              <div class="select-box">
                <select name="SUBJECTS" onChange={this.handleSubjectsChange}>
                  <option hidden>Subjects</option>
                  <option>ENGLISH</option>
                  <option>TELUGU</option>
                  <option>HINDI</option>
                  <option>SCIENCE</option>
                  <option>MATHEMATICS</option>
                  <option>SOCIAL</option>
                </select>
              </div>
              </div>

              <button onClick={this.addSubjects}>Add Subjects</button>


              {this.state.SUBJECTS.map((subject, index) => (
                <p key={index}>{subject}</p>
              ))}
              
           


            <button variant="primary" type="submit">
              Register
            </button>

            <button variant="primary" onClick={this.toggleShowSubjects}>
              Show Subjects
            </button>

            {this.state.showSubjects &&
              this.state.SUBJECTS.map((subject, index) => (
                <p key={index}>{subject}</p>
              ))}
          </form>
        </section>
      </div>
    );
  }
}

export default TeacherRegistration;
