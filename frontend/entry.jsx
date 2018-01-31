import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //For testing =================
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  //=====================

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={ store } />, root
  );
});
