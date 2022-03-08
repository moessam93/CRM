import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import ContentEditable from 'react-contenteditable'

const ContactView = () => {
    //after history push should update the contacts table
    let history = useHistory();
    const location = useLocation();
    
    const [email, setEmail] = useState(location.state.email);
    const [firstName, setFirstName] = useState(location.state.first_name);
    const [lastName, setLastName] = useState(location.state.last_name);
    const [jobTitle, setJobTitle] = useState(location.state.job_title);
    const [contactOwner, setContactOwner] = useState(location.state.contact_owner);
    const [leadStatus, setLeadStatus] = useState(location.state.lead_status);
    const [lifecycleStage, setLifecycleStage] = useState(location.state.lifecycle_stage);
    const [phoneNumber, setPhoneNumber] = useState(location.state.mobile_number)
    const [company, setCompany] = useState(location.state.company);
    const [country, setCountry] = useState(location.state.country);

    const saveContact = () => {
        Axios({
            method: 'PATCH',
            url: `http://localhost:4000/api/contacts/${location.state.contact_id}`,
            withCredentials: true,
            headers: {
                'content-type': 'application/json'
            },
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
        }).then(()=>history.push('/contacts'))
    }

    const deleteContact = ()=>{
        Axios({
            method:'DELETE',
            url:`http://localhost:4000/api/contacts/${location.state.contact_id}`,
            withCredentials:true
        }).then(()=>history.push('/contacts'))
    }

    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>First name</td>
                        <td>
                        <ContentEditable html={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Last name</td>
                        <td>
                            <ContentEditable html={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <ContentEditable html={email} onChange={(e) => setEmail(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Job title</td>
                        <td>
                            <ContentEditable html={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Contact owner</td>
                        <td>
                            <ContentEditable html={contactOwner} onChange={(e) => setContactOwner(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Lead status</td>
                        <td>
                        <ContentEditable html={leadStatus} onChange={(e) => setLeadStatus(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Lifecycle stage</td>
                        <td>
                        <ContentEditable html={lifecycleStage} onChange={(e) => setLifecycleStage(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td>
                        <ContentEditable html={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Company</td>
                        <td>
                        <ContentEditable html={company} onChange={(e) => setCompany(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>
                        <ContentEditable html={country} onChange={(e) => setCountry(e.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button onClick={saveContact}>Save</Button>
            <Button onClick={deleteContact}>Delete</Button>
        </div>
    )
}

export default ContactView