import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/pages/Login';
import Header from './components/navigation/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './actions/authActions';

const Dashboard = () => <h1>Dashboard</h1>;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Router>
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
