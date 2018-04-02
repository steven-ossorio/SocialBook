import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { Dropdown, DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import DropDown from './dropdown';
import PostDropDown from './delete_post.jsx';
import SessionFormContainer from '../session/session_form_container';
import SignUpFormContainer from '../signup/signup_form_container';
import ProfileContainer from '../profile/profile_container';
import PostFormContainer from '../post/post_form_container';
import HomeNavContainer from './home_nav_container';
import NewsFeedContainer from './newsfeed_container';
import AboutDeveloper from './about_developer';
import NewsContainer from './news_container';
import ListSection from './list';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    if ((this.props.newsfeed === undefined || this.props.user === undefined) && this.props.currentUser) {
      this.props.fetchNewsFeed();
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.currentUser && nextProps.currentUser) {
      this.props.fetchNewsFeed();
      this.props.fetchUser(nextProps.currentUser.id);
    }
  }

  render(){
    if (this.props.currentUser === null) {
      return (
        <div>
          <SessionFormContainer />
          <SignUpFormContainer />
        </div>
      );
    } else if (this.props.currentUser !== undefined && this.props.user !== undefined) {
      return(
        <div>
          <HomeNavContainer />
          <div className="newsfeed_container">
            <div className='landing-page-container'>
              <div className="left-portion">
                <ListSection user={ this.props.user }/>
              </div>
              <div className='middle-portion'>
                <PostFormContainer />
                <NewsFeedContainer />
              </div>
              <div className='right-portion'>
                <AboutDeveloper />
                <NewsContainer />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.currentUser && this.props.user === undefined) {
      return (
        <div className="loading-spin">
          <RingLoader size={100} color={'#0000FF'} />
        </div>
      );
    }
  }
}

export default Home;
