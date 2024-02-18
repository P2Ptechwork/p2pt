import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class St_registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SCHOOL_ID: 'LOCSCH0001',
            STUDENT_NAME: '',
            GRADE: '',
            SECTION: '',
            AADHAR_NO: '',
            GUARDIAN_NAME: '',
            RELATION: '',
            GUARDIAN_MOBILE: '',
            GUARDIAN_EMAIL: '',
            DOC_ID: '',
            D_NO: '',
            STREET: '',
            AREA: '',
            CITY: '',
            DISTRICT: '',
            STATE: '',
            PIN_CODE: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://bakend.azurewebsites.net/st_register', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formSchoolId">
                    <Form.Label>School ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter School ID" name="SCHOOL_ID" value={this.state.SCHOOL_ID} readOnly />
                </Form.Group>

                <Form.Group controlId="formStudentName">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Student Name" name="STUDENT_NAME" onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="formGrade">
                    <Form.Label>Grade</Form.Label>
                    <Form.Control type="text" placeholder="Enter Grade" name="GRADE" onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="formSection">
                    <Form.Label>Section</Form.Label>
                    <Form.Control type="text" placeholder="Enter Section" name="SECTION" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formAadharNo">
                    <Form.Label>Aadhar No</Form.Label>
                    <Form.Control type="number" placeholder="Enter Aadhar No" name="AADHAR_NO" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formGuardianName">
                    <Form.Label>Guardian Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Guardian Name" name="GUARDIAN_NAME" onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="formRelation">
                    <Form.Label>Relation</Form.Label>
                    <Form.Control type="text" placeholder="Enter Relation" name="RELATION" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formGuardianMobile">
                    <Form.Label>Guardian Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Guardian Mobile" name="GUARDIAN_MOBILE" onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="formGuardianEmail">
                    <Form.Label>Guardian Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Guardian Email" name="GUARDIAN_EMAIL" onChange={this.handleChange} required />
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

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        );
    }
}

export default St_registration;