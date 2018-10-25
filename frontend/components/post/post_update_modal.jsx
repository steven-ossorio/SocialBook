import React, { Component } from "react";
import Modal from "react-modal";
import PostUpdateForm from "./post_update_form";
import { func, object } from "prop-types";

class PostUpdate extends Component {
  state = {
    modalIsOpen: false
  };

  static PropTypes = {
    post: object.isRequired,
    currentUser: object.isRequired,
    user: object.isRequired,
    updatePost: func.isRequired,
    editClick: func.isRequired
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  updatePost = e => {
    let fileReader = new FileReader();
    let file = e.currentTarget.files[0];
    fileReader.onloadend = () => {
      this.setState({
        imageFile: file,
        imageUrl: fileReader.result
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({
        imageUrl: "",
        imageFile: null
      });
    }
  };

  cancelUpload = () => {
    this.setState({
      imageFile: null,
      imageUrl: null
    });
  };

  closeAllModal = () => {
    this.props.toggleMenu();
    this.props.editClick();
    this.closeModal();
  };

  onSubmit = e => {
    let file = this.state.imageFile;
    const formData = new FormData();
    if (file) {
      formData.append("user[image]", file);
    }
    this.props.updateUser(formData, this.props.currentUser.id).then(() => {
      this.setState({
        modalIsOpen: false,
        imageFile: null,
        imageUrl: null
      });
    });
  };

  render() {
    const { post, currentUser, user, updatePost, editClick } = this.props;

    return (
      <div>
        <div onClick={this.openModal} className="upload-image-container">
          <div className="selection-option">
            <button onClick={editClick}>Edit</button>
          </div>
        </div>
        <Modal
          className="edit-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName="edit-modal-background"
          shouldCloseOnOverlayClick={false}
        >
          <div className="modal-heading">
            <h2>Edit Post</h2>
            <h2 className="modal-close-button" onClick={this.closeAllModal}>
              X
            </h2>
          </div>
          <div className="modal-body-container">
            <div className="modal-body">
              <PostUpdateForm
                post={post}
                currentUser={currentUser}
                user={user}
                updatePost={updatePost}
                closeAllModal={this.closeAllModal}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PostUpdate;
