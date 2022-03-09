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
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    Axios({
      method:'GET',
      url:'http://localhost:4000/login-success',
      withCredentials:true
    }).then((res)=>{
      if (res.data){
        setIsLogged(true);
      }
    })
  }, [])

  return (
    <div className="App">
      <NavbarMain isLogged={isLogged} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home isLogged={isLogged} />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/companies">
            <Companies />
          </Route>
          <Route exact path="/deals">
            <Deals />
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
