import React from "react";

const PostContext = React.createContext({
  postItemsList: [],
  addNewPost: () => {},
  editPost: () => {},
  deletePost: () => {},
});

export default PostContext;
