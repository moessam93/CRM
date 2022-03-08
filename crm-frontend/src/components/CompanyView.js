import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import ContentEditable from 'react-contenteditable'

const CompanyView = () => {
    let history = useHistory();
    const location = useLocation();

    const [companyName, setCompanyName] = useState(location.state.company_name);
    const [companyDomain, setCompanyDomain] = useState(location.state.company_domain);
    const [companyOwner, setCompanyOwner] = useState(location.state.company_owner);
    const [industry, setIndustry] = useState(location.state.industry);
    const [phoneNumber, setPhoneNumber] = useState(location.state.phone_number);
    const [country, setCountry] = useState(location.state.country);
    const [noEmployees, setNoEmployees] = useState(location.state.no_employees);
    const [annualRevenue, setAnnualRevenue] = useState(location.state.annual_revenue);

    const saveCompany = () => {
        Axios({
            method: 'PATCH',
            url: `http://localhost:4000/api/companies/${location.state.company_id}`,
            withCredentials: true,
            headers: {
                'content-type': 'application/json'
            },
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
        }).then(() => history.push('/companies'))
    }

    const deleteCompany = () => {
        Axios({
            method: 'DELETE',
            url: `http://localhost:4000/api/companies/${location.state.company_id}`,
            withCredentials: true
        }).then(() => history.push('/companies'))
    }

    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Company name</td>
                        <td>
                            <ContentEditable html={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Company domain</td>
                        <td>
                            <ContentEditable html={companyDomain} onChange={(e) => setCompanyDomain(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Company owner</td>
                        <td>
                            <ContentEditable html={companyOwner} onChange={(e) => setCompanyOwner(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Industry</td>
                        <td>
                            <ContentEditable html={industry} onChange={(e) => setIndustry(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td>
                            <ContentEditable html={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>
                            <ContentEditable html={country} onChange={(e) => setCountry(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Number of employees</td>
                        <td>
                            <ContentEditable html={noEmployees} onChange={(e) => setNoEmployees(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Annual revenue</td>
                        <td>
                            <ContentEditable html={annualRevenue} onChange={(e) => setAnnualRevenue(e.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button onClick={saveCompany}>Save</Button>
            <Button onClick={deleteCompany}>Delete</Button>
        </div>
    )
}

export default CompanyView