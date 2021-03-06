import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Deal from './Deal';
import { useEffect } from 'react';
import Axios from 'axios';

const Deals = () => {
  let history = useHistory();
  const [deals,setDeals] = useState([]);
  
  useEffect(() => {
    const getDeals = () => {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/api/deals",
      }).then((res) => {
        if (res.data === 'Unauthorized') {
          setDeals([]);
        }
        else {
          setDeals(res.data);
        }
      });
    }
    getDeals();
  },[])

  return (
    <div>
      <div>
        <button className="add_btn" onClick={() => history.push('/add-deal')}>Add Deal</button>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type='checkbox'></input></th>
            <th>Deal Name</th>
            <th>Deal Stage</th>
            <th>Close Date</th>
            <th>Deal Owner</th>
            <th>Amount</th>
            <th>Associated Company</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => <Deal key={deal.deal_id} deal={deal} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Deals