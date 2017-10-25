import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import SignUpFormContainer from './signup/signup_form_container';
import { Route } from 'react-router-dom';


const App = () => (
    <div>
      <header>
        <h1>Welcome to the SocialBook App</h1>
        <GreetingContainer />
      </header>

      <Route path="/" component={SessionFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
    </div>
);
export default App;
