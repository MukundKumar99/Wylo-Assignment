import "./index.css";

import { MdDelete } from "react-icons/md";
import PostContext from "../../context/PostContext";
import EditPost from "../EditPost";

const PostItem = (props) => (
  <PostContext.Consumer>
    {(value) => {
      const { deletePost } = value;
      const { post } = props;
      const { id, title, imageUrl, description } = post;

      const onDeletePost = () => {
        const confirmDelete = window.confirm("Are you sure want to delete?");
        if (confirmDelete) {
          deletePost(id);
        }
      };

      return (
        <li className="post-item">
          <EditPost postDetails={post} />
          <button
            type="button"
            className="functional-btn del"
            onClick={onDeletePost}
          >
            <MdDelete />
          </button>
          <img src={imageUrl} className="post-image" alt="Post" />
          <hr />
          <h1 className="post-title">{title}</h1>
          <p className="post-description">{description}</p>
        </li>
      );
    }}
  </PostContext.Consumer>
);

export default PostItem;
