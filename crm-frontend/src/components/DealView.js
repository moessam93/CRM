import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import ContentEditable from 'react-contenteditable';
import moment from 'moment';

const DealView = () => {
    let history = useHistory();
    const location = useLocation();

    const [dealName, setDealName] = useState(location.state.deal_name);
    const [dealStage, setDealStage] = useState(location.state.deal_stage);
    const [dealOwner, setDealOwner] = useState(location.state.deal_owner);
    const [amount, setAmount] = useState(String(location.state.amount));
    const [currency, setCurrency] = useState(location.state.currency);
    const [closeDate, setCloseDate] = useState(location.state.close_date);
    const [dealDescription, setDealDescription] = useState(location.state.deal_description);
    const [dealSource, setDealSource] = useState(location.state.deal_source);
    const [country, setCountry] = useState(location.state.country);
    const [associatedCompany, setAssociatedCompany] = useState(location.state.associated_company);

    const saveDeal = () => {
        Axios({
            method: 'PATCH',
            url: `http://localhost:4000/api/deals/${location.state.deal_id}`,
            withCredentials: true,
            data: {
                deal_name: dealName,
                deal_stage: dealStage,
                deal_owner: dealOwner,
                amount: amount,
                currency: currency,
                close_date: closeDate,
                deal_description: dealDescription,
                deal_source: dealSource,
                country: country,
                associated_company: associatedCompany
            }
        }).then((res) => {
            if (res.data == 'Not deal owner') {
                alert("You are not authorized to edit or delete this deal")
            }
            history.push('/deals')
        });
    }

    const deleteDeal = () => {
        Axios({
            method: 'DELETE',
            url: `http://localhost:4000/api/deals/${location.state.deal_id}`,
            withCredentials: true,
        }).then((res) => {
            if (res.data == 'Not deal owner') {
                alert("You are not authorized to edit or delete this deal")
            }
            history.push('/deals')
        });
    }

    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Deal name</td>
                        <td>
                            <ContentEditable html={dealName} onChange={(e) => setDealName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Deal stage</td>
                        <td>
                            <ContentEditable html={dealStage} onChange={(e) => setDealStage(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Deal owner</td>
                        <td>
                            <ContentEditable html={dealOwner} onChange={(e) => setDealOwner(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Amount</td>
                        <td>
                            <ContentEditable html={amount} onChange={(e) => setAmount(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Currency</td>
                        <td>
                            <ContentEditable html={currency} onChange={(e) => setCurrency(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Close date</td>
                        <td>
                            <input type="text" placeholder={moment.utc(closeDate).format('MMM Do, YYYY')} onFocus={(e)=>e.target.type='date'} onChange={(e)=>setCloseDate(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Deal description</td>
                        <td>
                            <ContentEditable html={dealDescription} onChange={(e) => setDealDescription(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Deal source</td>
                        <td>
                            <ContentEditable html={dealSource} onChange={(e) => setDealSource(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>
                            <ContentEditable html={country} onChange={(e) => setCountry(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Associated company</td>
                        <td>
                            <ContentEditable html={associatedCompany} onChange={(e) => setAssociatedCompany(e.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button onClick={saveDeal}>Save</Button>
            <Button onClick={deleteDeal}>Delete</Button>
        </div>
    )
}

export default DealView