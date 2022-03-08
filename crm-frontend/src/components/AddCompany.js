import Axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AddCompany = () => {
    let history = useHistory();

    const [companyName, setCompanyName] = useState('');
    const [companyDomain, setCompanyDomain] = useState('');
    const [companyOwner, setCompanyOwner] = useState('');
    const [industry, setIndustry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [noEmployees, setNoEmployees] = useState('');
    const [annualRevenue, setAnnualRevenue] = useState('');

    const sendCompany = () => {
        Axios({
            method: 'POST',
            url: 'http://localhost:4000/api/companies',
            headers: {
                'content-type': 'application/json'
            },
            withCredentials: true,
            data: {
                company_name: companyName,
                company_domain: companyDomain,
                company_owner: companyOwner,
                industry: industry,
                phone_number: phoneNumber,
                country: country,
                no_employees: noEmployees,
                annual_revenue: annualRevenue
            }
        })
        history.push('/');
    }
    return (
        <div>
            <Form onSubmit={sendCompany}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Company name</Form.Label>
                    <Form.Control type="text" required onChange={(e) => setCompanyName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Company domain</Form.Label>
                    <Form.Control type="text" required onChange={(e) => setCompanyDomain(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Company owner</Form.Label>
                    <Form.Control type="text" onChange={(e) => setCompanyOwner(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Industry</Form.Label>
                    <Form.Control type="text" onChange={(e) => setIndustry(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" onChange={(e) => setCountry(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                    <Form.Label>Number of employees</Form.Label>
                    <Form.Control type="text" onChange={(e) => setNoEmployees(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                    <Form.Label>Annual revenue</Form.Label>
                    <Form.Control type="text" onChange={(e) => setAnnualRevenue(e.target.value)} />
                </Form.Group>
                <Button type="submit">
                    Add Company
                </Button>
            </Form>
        </div>
    )
}

export default AddCompany