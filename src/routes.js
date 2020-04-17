import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import CharacterList from './pages/CharacterList';
import CharacterDetails from './pages/CharacterDetails';
import Login from './pages/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={CharacterList}/>
        <Route path='/login' component={Login} />
        <PrivateRoute path="/character/details" component={CharacterDetails} />
      </Switch>
    </BrowserRouter>
  );
}
