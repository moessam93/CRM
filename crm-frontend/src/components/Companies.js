import React from 'react';
import Company from './Company';
import { useHistory } from 'react-router';

const Companies = ({ companies }) => {
  let history = useHistory();

  return (
    <div>
      <div>
        <button className="add_btn" onClick={() => history.push('/add-company')}>Add Company</button>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type='checkbox'></input></th>
            <th>Name</th>
            <th>Industry</th>
            <th>Company Owner</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>No of Employees</th>
            <th>Annual Revenue</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => <Company key={company.company_id} company={company} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Companies