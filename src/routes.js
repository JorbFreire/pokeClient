import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CharacterList from './pages/CharacterList';
import CharacterDetails from './pages/CharacterDetails';
import Login from './pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={CharacterList}/>
        <Route path='/character/details' component={CharacterDetails} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
