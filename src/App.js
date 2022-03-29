import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Chekcout from './Components/Chekcout';
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Components/Payment';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS ', authUser);
      if (authUser) {
        //the user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Chekcout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
