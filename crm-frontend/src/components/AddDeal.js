import Axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AddDeal = () => {
    let history = useHistory();

    const [dealName, setDealName] = useState('');
    const [dealStage, setDealStage] = useState('');
    const [dealOwner, setDealOwner] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [closeDate, setCloseDate] = useState('');
    const [dealDescription, setDealDescription] = useState('');
    const [dealSource, setDealSource] = useState('');
    const [country, setCountry] = useState('');
    const [associatedCompany, setAssociatedCompany] = useState('');

    const sendDeal = () => {
        Axios({
            method: 'POST',
            url: 'http://localhost:4000/api/deals',
            headers: {
                'content-type': 'application/json'
            },
            withCredentials: true,
            data: {
                deal_name: dealName,
                deal_stage: dealStage,
                deal_owner: dealOwner,
                amount: amount,
                currency: currency,
                close_date: closeDate,
                deal_description: dealDescription,
                deal_source: dealSource,
                country: country,
                associated_company: associatedCompany
            }
        })
        history.push('/');
    }
    return (
        <div>
            <Form onSubmit={sendDeal}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Deal name</Form.Label>
                    <Form.Control type="text" required onChange={(e) => setDealName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Deal stage</Form.Label>
                    <Form.Control type="text" required onChange={(e) => setDealStage(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Deal owner</Form.Label>
                    <Form.Control type="text" required onChange={(e) => setDealOwner(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" required onChange={(e) => setAmount(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Currency</Form.Label>
                    <Form.Control type="text" required onChange={(e) => setCurrency(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    <Form.Label>Close date</Form.Label>
                    <Form.Control type="date" required onChange={(e) => setCloseDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                    <Form.Label>Deal description</Form.Label>
                    <Form.Control type="textarea" onChange={(e) => setDealDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                    <Form.Label>Deal source</Form.Label>
                    <Form.Control type="text" required onChange={(e) => setDealSource(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" onChange={(e) => setCountry(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
                    <Form.Label>Associated Company</Form.Label>
                    <Form.Control type="text" onChange={(e) => setAssociatedCompany(e.target.value)} />
                </Form.Group>
                <Button type="submit">
                    Add Deal
                </Button>
            </Form>
        </div>
    )
}

export default AddDeal