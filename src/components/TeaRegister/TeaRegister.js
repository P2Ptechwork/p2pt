import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class TeacherRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SCHOOL_ID: '',
            TEACHER_NAME: '',
            QUALIFICATION: '',
            AADHAR_NO: '',
            TEACHER_MOBILE: '',
            TEACHER_EMAIL: '',
            DOC_ID: '',
            D_NO: '',
            STREET: '',
            AREA: '',
            CITY: '',
            DISTRICT: '',
            STATE: '',
            PIN_CODE: '',
            SUBJECTS: [],
            TEMP_SUBJECTS: [],
            showSubjects: false
        };
    }
    toggleShowSubjects = () => {
        this.setState(prevState => ({ showSubjects: !prevState.showSubjects }));
    }
    componentDidMount() {
        const schoolId = sessionStorage.getItem('schoolId');
        if (schoolId) {
            this.setState({ SCHOOL_ID: schoolId });
        }
    }

    handleSubjectsChange = (event) => {
        const subjects = Array.from(event.target.selectedOptions, option => option.value);
        this.setState({ TEMP_SUBJECTS: subjects });
    }



    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    addSubjects = () => {
        this.setState(prevState => ({
            SUBJECTS: [...prevState.SUBJECTS, ...prevState.TEMP_SUBJECTS],
            TEMP_SUBJECTS: []
        }));
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://4a8d-2409-408c-5eb2-b860-b58c-63d0-719a-d5f2.ngrok-free.app/tregister', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    render() {
        console.log(this.state.TEMP_SUBJECTS);
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formSchoolId">
                    <Form.Label>School ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter School ID" name="SCHOOL_ID" value={this.state.SCHOOL_ID} readOnly />
                </Form.Group>
                <Form.Group controlId="formTeacherName">
                    <Form.Label>Teacher Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Teacher Name" name="TEACHER_NAME" onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="formQualification">
                    <Form.Label>Qualification</Form.Label>
                    <Form.Control type="text" placeholder="Enter Qualification" name="QUALIFICATION" onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="formAadharNo">
                    <Form.Label>Aadhar No</Form.Label>
                    <Form.Control type="number" placeholder="Enter Aadhar No" name="AADHAR_NO" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formTeacherMobile">
                    <Form.Label>Teacher Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Teacher Mobile" name="TEACHER_MOBILE" onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="formTeacherEmail">
                    <Form.Label>Teacher Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Teacher Email" name="TEACHER_EMAIL" onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="formDocId">
                    <Form.Label>Document ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Document ID" name="DOC_ID" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formDNo">
                    <Form.Label>D No</Form.Label>
                    <Form.Control type="text" placeholder="Enter D No" name="D_NO" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control type="text" placeholder="Enter Street" name="STREET" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control type="text" placeholder="Enter Area" name="AREA" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter City" name="CITY" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control type="text" placeholder="Enter District" name="DISTRICT" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Enter State" name="STATE" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formPinCode">
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter Pin Code" name="PIN_CODE" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formSubjects">
                    <Form.Label>Subjects</Form.Label>
                    <Form.Control as="select" multiple name="SUBJECTS" onChange={this.handleSubjectsChange}>
                        <option>ENGLISH</option>
                        <option>TELUGU</option>
                        <option>HINDI</option>
                        <option>SCIENCE</option>
                        <option>MATHEMATICS</option>
                        <option>SOCIAL</option>
                    </Form.Control>
                    <Button onClick={this.addSubjects}>Add Subjects</Button>
                    {this.state.SUBJECTS.map((subject, index) => (
                        <p key={index}>{subject}</p>
                    ))}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Button variant="primary" onClick={this.toggleShowSubjects}>
                    Show Subjects
                </Button>
                {this.state.showSubjects && this.state.SUBJECTS.map((subject, index) => (
                    <p key={index}>{subject}</p>
                ))}
            </Form>
        );
    }
}

export default TeacherRegistration;