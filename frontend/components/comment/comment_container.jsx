import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentList from './comment_list';

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comment
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList));
