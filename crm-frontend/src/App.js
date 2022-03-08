import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/Contacts';
import Companies from './components/Companies';
import Home from './components/Home';
import Deals from './components/Deals';
import Tasks from './components/Tasks';
import NavbarMain from './components/NavbarMain';
import AddContact from './components/AddContact';
import AddCompany from './components/AddCompany';
import AddDeal from './components/AddDeal';
import { useEffect, useState } from "react";
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactView from './components/ContactView';
import CompanyView from './components/CompanyView';
import DealView from './components/DealView';

function App() {
  const [contacts, setContacts] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [deals, setDeals] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
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
          setIsLogged(true);
        }
      })
    }

    const getCompanies = () => {
      Axios({
        method: 'GET',
        withCredentials: true,
        url: "http://localhost:4000/api/companies"
      }).then((res) => {
        if (res.data === 'Unauthorized') {
          setCompanies([]);
        }
        else {
          setCompanies(res.data);
          setIsLogged(true);
        }
      })
    }

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
          setIsLogged(true);
        }
      });
    }

    getContacts();
    getCompanies();
    getDeals();
  }, [])

  // const fetchContacts = async () => {
  //   const res = await fetch('http://localhost:4000/api/contacts');
  //   const data = await res.json();
  //   return data;
  // };

  // const fetchCompanies = async () => {
  //   const res = await fetch('http://localhost:4000/api/companies');
  //   const data = await res.json();
  //   return data;
  // }

  // const fetchDeals = async () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:4000/api/deals",
  //   }).then((res) => setDeals(res));
  // }

  return (
    <div className="App">
      <NavbarMain isLogged={isLogged} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home isLogged={isLogged} />
          </Route>
          <Route exact path="/contacts">
            <Contacts contacts={contacts} />
          </Route>
          <Route exact path="/companies">
            <Companies companies={companies} />
          </Route>
          <Route exact path="/deals">
            <Deals deals={deals} />
          </Route>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
          <Route exact path="/add-contact">
            <AddContact />
          </Route>
          <Route exact path="/add-company">
            <AddCompany />
          </Route>
          <Route exact path="/add-deal">
            <AddDeal />
          </Route>
          <Route exact path="/view-contact">
            <ContactView />
          </Route>
          <Route exact path="/view-company">
            <CompanyView />
          </Route>
          <Route exact path="/view-deal">
            <DealView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
