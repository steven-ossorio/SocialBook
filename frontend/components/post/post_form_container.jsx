import { fetchPost, createPost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';

const mapStateToProps = (state, ownProps) => {
  // 
  return {
    currentUser: state.session.currentUser,
    post: state.posts,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    createPost: post => dispatch(createPost(post))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm));
