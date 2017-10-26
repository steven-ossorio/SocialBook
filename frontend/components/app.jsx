import React from 'react';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session/session_form_container';
import SignUpFormContainer from './signup/signup_form_container';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
      <header>
        <HomeContainer />
        <AuthRoute path="/" component={SessionFormContainer} />
        <AuthRoute path="/" component={SignUpFormContainer} />
      </header>
    </div>
);
export default App;
