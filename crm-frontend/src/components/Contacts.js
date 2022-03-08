import React from 'react'
import Contact from './Contact'
import { useHistory } from 'react-router';

const Contacts = ({ contacts }) => {
    let history = useHistory();
    
    return (
        <div>
            <div>
                <button className="add_btn" onClick={()=>history.push('/add-contact')}>Add Contact</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th><input type='checkbox'></input></th>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Company</th>
                        <th>Contact Owner</th>
                        <th>Lead Status</th>
                        <th>Lifecycle Stage</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => <Contact key={contact.contact_id} contact={contact} />)}

                </tbody>
            </table>
        </div>
    )
}

export default Contacts