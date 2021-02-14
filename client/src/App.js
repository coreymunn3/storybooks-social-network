import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/authActions';
// components
import PrivateRoute from './components/PrivateRoute';
import Login from './components/pages/Login';
import Header from './components/navigation/Header';
import Dashboard from './components/pages/dashboard/Dashboard';

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
          <PrivateRoute path='/dashboard' component={Dashboard}></PrivateRoute>
          {/* other routes here, inside the fragment */}
        </Fragment>
      </Switch>
    </Router>
  );
};

export default App;
