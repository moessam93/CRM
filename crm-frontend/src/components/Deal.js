import React from 'react'
import { useHistory } from 'react-router'
import moment from 'moment';

const Deal = ({ deal }) => {
    let history = useHistory();

    const openDeal = ()=>{
        history.push('/view-deal',deal);
    }
    
    return (
        <tr onDoubleClick={()=>openDeal()}>
            <td><input type='checkbox'></input></td>
            <td>{deal.deal_name}</td>
            <td>{deal.deal_stage}</td>
            <td>{moment.utc(deal.close_date).format('MMM Do, YYYY')}</td>
            <td>{deal.deal_owner}</td>
            <td>{deal.amount + " " + deal.currency}</td>
            <td>{deal.associated_company}</td>
        </tr>
    )
}

export default Deal