import React from 'react';
import { useHistory } from 'react-router';

const Contact = ({ contact }) => {
    let history = useHistory();

    const openContact = () => {
        history.push('/view-contact', contact);
    }
    
    return (
        <tr onDoubleClick={() => openContact()}>
            <td><input type='checkbox'></input></td>
            <td>{contact.first_name + " " + contact.last_name}</td>
            <td>{contact.job_title ? contact.job_title : '-'}</td>
            <td>{contact.email}</td>
            <td>{contact.mobile_number ? contact.mobile_number : '-'}</td>
            <td>{contact.company ? contact.company : '-'}</td>
            <td>{contact.contact_owner ? contact.contact_owner : '-'}</td>
            <td>{contact.lead_status ? contact.lead_status : '-'}</td>
            <td>{contact.lifecycle_stage ? contact.lifecycle_stage : '-'}</td>
            <td>{contact.country ? contact.country : '-'}</td>
        </tr>
    )
}

export default Contact