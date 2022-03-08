import React from 'react'
import { useHistory } from 'react-router'

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
            <td>{deal.close_date.split("T")[0]}</td>
            <td>{deal.deal_owner}</td>
            <td>{deal.amount + " " + deal.currency}</td>
            <td>{deal.associated_company}</td>
        </tr>
    )
}

export default Deal