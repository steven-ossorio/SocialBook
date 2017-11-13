import React from 'react';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session/session_form_container';
import SignUpFormContainer from './signup/signup_form_container';
import PostFormContainer from './post/post_form_container';
import PostIndexContainer from './post/post_index_container';
import ProfileContainer from './profile/profile_container';
import { Route, Link, Redirect, Switch, replace } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
      <header>
        <Route exact path='/testing' component={PostFormContainer} />
        <Route exact path='/testing' component={PostIndexContainer} />
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/users/:userId/friends'  />
        <Route path="/users/:userId" component={ProfileContainer}/>
      </header>
    </div>
);
export default App;
