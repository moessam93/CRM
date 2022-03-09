import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import { useHistory } from 'react-router';
import Axios from 'axios';

const Contacts = () => {
    let history = useHistory();
    const [contacts,setContacts]=useState([]);

    useEffect(()=>{
        const getContacts = () => {
            Axios({
              method: 'GET',
              withCredentials: true,
              url: "http://localhost:4000/api/contacts"
            }).then((res) => {
              if (res.data === 'Unauthorized') {
                setContacts([]);
              }
              else {
                setContacts(res.data);
              }
            })
          }
          
        getContacts();
    },[]);
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