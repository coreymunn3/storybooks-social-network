import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Login from './components/pages/Login';
import Header from './components/navigation/Header';

const Dashboard = () => <h1>Dashboard</h1>;

const App = () => {
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get('/auth/currentuser');
      console.log(data);
    };
    getUser();
  }, []);
  return (
    <Router>
      {/* render header if user is loged in */}

      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Fragment>
          <Header />
          <Route path='/dashboard' component={Dashboard}></Route>
        </Fragment>
      </Switch>
    </Router>
  );
};

export default App;
