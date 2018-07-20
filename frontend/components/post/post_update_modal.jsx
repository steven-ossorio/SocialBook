import React, { Component } from "react";
import Modal from "react-modal";

class PostUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      imageFile: null,
      imageUrl: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.cancelUpload = this.cancelUpload.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  updatePost(e) {
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
  }

  cancelUpload() {
    this.setState({
      imageFile: null,
      imageUrl: null
    });
  }

  onSubmit(e) {
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
  }

  render() {
    return (
      <div>
        <div onClick={this.openModal} className="upload-image-container">
          <div className="selection-option">
            <button>Edit</button>
          </div>
        </div>
        <Modal
          className="modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-background"
          shouldCloseOnOverlayClick={false}
        >
          <div className="modal-heading">
            <h2>Update Profile Picture</h2>
            <h2 className="modal-close-button" onClick={this.closeModal}>
              X
            </h2>
          </div>
          <div className="modal-body-container">
            <div className="modal-body">
              <label htmlFor="profile-image" className="modal-body-label">
                <i className="fa fa-plus" />
                <h1>Upload Photo</h1>
              </label>
              <input id="profile-image" type="file" />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PostUpdate;
