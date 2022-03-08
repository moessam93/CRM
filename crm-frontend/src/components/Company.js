import React from 'react'
import { useHistory } from 'react-router';

const Company = ({ company }) => {
    let history = useHistory();
    const openCompany = () => {
        history.push('/view-company', company);
    }
    return (
        <tr onDoubleClick={() => openCompany(company.company_id)}>
            <td><input type='checkbox'></input></td>
            <td>{company.company_name}</td>
            <td>{company.industry ? company.industry : '-'}</td>
            <td>{company.company_owner ? company.company_owner : '-'}</td>
            <td>{company.phone_number ? company.phone_number : '-'}</td>
            <td>{company.country ? company.country : '-'}</td>
            <td>{company.no_employees ? company.no_employees : '-'}</td>
            <td>{company.annual_revenue ? company.annual_revenue : '-'}</td>
        </tr>
    )
}

export default Company