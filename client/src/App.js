import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/pages/Login';

const Dashboard = () => <h1>Dashboard</h1>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
      </Switch>
    </Router>
  );
};

export default App;
