import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
// import NotFound from './shared/components/NotFound';
import Users from './user/pages/Users';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Users} />
        <Route exact path='/places/new' component={NewPlace} />
        {/* <Route exact path='/404' component={NotFound} /> */}
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
