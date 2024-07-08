import { Component } from "react";
import "./index.css";
import Popup from "reactjs-popup";
import { MdEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import PostContext from "../../context/PostContext";

class EditPost extends Component {
  state = { title: "", imageUrl: "", description: "" };

  componentDidMount() {
    const { postDetails } = this.props;
    const { title, imageUrl, description } = postDetails;
    this.setState({ title, imageUrl, description });
  }

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeImageUrl = (event) => {
    this.setState({ imageUrl: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    const { title, imageUrl, description } = this.state;
    const { id } = this.props.postDetails;
    return (
      <PostContext.Consumer>
        {(value) => {
          const { editPost } = value;
          const onSubmitForm = (event) => {
            event.preventDefault();
            const updatedPost = { id, title, imageUrl, description };
            editPost(updatedPost);
          };

          return (
            <Popup
              modal
              trigger={
                <button type="button" className="functional-btn edit">
                  <MdEdit />
                </button>
              }
              className="popup-content"
            >
              {(close) => (
                <div className="modal-container">
                  <button
                    className="close-button"
                    type="button"
                    onClick={() => close()}
                  >
                    <IoMdClose size={20} color="#231f20" />
                  </button>
                  <div className="edit-form-bg-container">
                    <form className="edit-post-form" onSubmit={onSubmitForm}>
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="title-input-field"
                        placeholder="Enter Title"
                        value={title}
                        onChange={this.onChangeTitle}
                      />
                      <label htmlFor="imageUrl" className="form-label">
                        Image Url
                      </label>
                      <input
                        type="text"
                        id="imageUrl"
                        className="title-input-field"
                        placeholder="Enter Title"
                        value={imageUrl}
                        onChange={this.onChangeImageUrl}
                      />
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        cols={50}
                        id="description"
                        className="description-input-field"
                        placeholder="Enter Description"
                        value={description}
                        onChange={this.onChangeDescription}
                      ></textarea>
                      <button type="submit" className="submit-btn">
                        Update Post
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </Popup>
          );
        }}
      </PostContext.Consumer>
    );
  }
}

export default EditPost;
