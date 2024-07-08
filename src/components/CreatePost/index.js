import "./index.css";
import { Component } from "react";
import { v4 } from "uuid";
import PostContext from "../../context/PostContext";

class CreatePost extends Component {
  state = {
    title: "",
    imageUrl: "",
    description: "",
  };

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

    return (
      <PostContext.Consumer>
        {(value) => {
          const { addNewPost } = value;
          const onSubmitForm = (event) => {
            event.preventDefault();
            const { history } = this.props;
            const updatedImageUrl =
              imageUrl === ""
                ? "https://cdn.pixabay.com/photo/2022/06/30/17/50/blog-post-7294160_1280.png"
                : imageUrl;
            const newPost = {
              id: v4(),
              title,
              imageUrl: updatedImageUrl,
              description,
            };
            addNewPost(newPost);
            this.setState({ title: "", description: "" });
            history.replace("/");
          };
          return (
            <div className="create-post-bg-container">
              <form className="create-post-form" onSubmit={onSubmitForm}>
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
                  placeholder="Enter Image Url (optional)"
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
                  Create Post
                </button>
              </form>
            </div>
          );
        }}
      </PostContext.Consumer>
    );
  }
}

export default CreatePost;
