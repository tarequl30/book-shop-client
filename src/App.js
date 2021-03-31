import './App.css';
import logo from './icons/book.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Button } from 'bootstrap';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import Orders from './Components/Orders/Orders';
import Navbars from './Components/Navbar/Navbars'
import { createContext } from 'react';
import { useState } from 'react';


export const UserContext = createContext()
function App() {
  const [user, setUser] = useState({
    name: null,
    error: null,
    loggedIn: false
})
  return (
    <UserContext.Provider value={[user , setUser]} >
      <Router>
          <Navbars />
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/order">
            <Orders />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
