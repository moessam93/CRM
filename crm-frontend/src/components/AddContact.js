import Axios from 'axios';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AddContact = () => {
    let history = useHistory();
    
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [contactOwner, setContactOwner] = useState('');
    const [leadStatus, setLeadStatus] = useState('');
    const [lifecycleStage, setLifecycleStage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');

    const sendContact = () => {
        Axios({
            method: 'POST',
            url: 'http://localhost:4000/api/contacts',
            headers: {
                'content-type': 'application/json'
            },
            withCredentials: true,
            data: {
                email: email,
                first_name: firstName,
                last_name: lastName,
                job_title: jobTitle,
                contact_owner: contactOwner,
                lead_status: leadStatus,
                lifecycle_stage: lifecycleStage,
                mobile_number: phoneNumber,
                company: company,
                country: country
            }
        })
        history.push('/');

    }
    return (
        <div>
            <Form onSubmit={sendContact}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="John" required onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" required onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Job title</Form.Label>
                    <Form.Control type="text" onChange={(e) => setJobTitle(e.target.value)} />
                </Form.Group>
                {/* Select from users */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Contact owner</Form.Label>
                    <Form.Control type="text" onChange={(e) => setContactOwner(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    <Form.Label>Lead status</Form.Label>
                    <Form.Control type="text" onChange={(e) => setLeadStatus(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                    <Form.Label>Lifecycle stage</Form.Label>
                    <Form.Control type="text" onChange={(e) => setLifecycleStage(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                    <Form.Label>Mobile phone number</Form.Label>
                    <Form.Control type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
                    <Form.Label>Company name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setCompany(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" onChange={(e) => setCountry(e.target.value)} />
                </Form.Group>
                <Button type="submit">
                    Add Contact
                </Button>
            </Form>
        </div>
    )
}

export default AddContact