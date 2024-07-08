import PostContext from "../../context/PostContext";
import PostItem from "../PostItem";
import "./index.css";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Post = () => (
  <PostContext.Consumer>
    {(value) => {
      const { postItemsList } = value;

      return (
        <div className="posts-container">
          <h1 className="all-post-title">All Posts </h1>
          <hr />
          <ul className="post-items-container">
            {postItemsList.map((eachPost) => (
              <PostItem key={eachPost.id} post={eachPost} />
            ))}
          </ul>
          <div className="create-btn-container">
            <Link to="/createPost">
              <button type="button" className="create-btn">
                <IoMdAdd /> New Post
              </button>
            </Link>
          </div>
        </div>
      );
    }}
  </PostContext.Consumer>
);

export default Post;
