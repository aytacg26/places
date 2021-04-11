import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
// import NotFound from './shared/components/NotFound';
import Users from './user/pages/Users';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/places/new' component={NewPlace} />
          {/* <Route exact path='/404' component={NotFound} /> */}
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
