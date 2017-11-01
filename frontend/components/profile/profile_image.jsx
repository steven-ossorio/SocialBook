import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class ProfileImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      imageFile: null,
      imageUrl: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  updateFile(e) {
    debugger
    let fileReader = new FileReader();
    let file = e.currentTarget.files[0];
    fileReader.onloadend = () => {
      this.setState({
        imageFile: file,
        imageUrl: fileReader.result,
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

  onSubmit(e){
    // let uploadImage = Object.assign({}, this.state);
    // delete uploadImage.modalIsOpen;
    // uploadImage.id = this.props.currentUser.id;
    this.props.updateUser(uploadImage);
  }

  render(){
    debugger
    if (this.props.currentUser.id === parseInt(this.props.match.params.userId) && this.state.imageFile === null) {
      return (
        <div>
          <div onClick={ this.openModal } className="upload-image-container">
            <div className="upload-image-hover">
              <span><i className="fa fa-camera"></i></span>
              <span>Update Profile Image</span>
            </div>
          </div>
          <Modal
            className="modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            >
            <div className="modal-heading">
              <h2>Update Profile Picture</h2>
              <h2 className="modal-close-button" onClick={ this.closeModal }>X</h2>
            </div>
            <div className="modal-body-container">
              <div className="modal-body">
                <label htmlFor="profile-image" className="modal-body-label">
                  <i className="fa fa-plus"></i>
                  <h1>Upload Photo</h1>
                </label>
                <input onChange={ this.updateFile } id="profile-image" type="file" />
              </div>
            </div>

          </Modal>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}


export default ProfileImage;
