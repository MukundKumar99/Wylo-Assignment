import { Switch, Route, Redirect } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostContext from "./context/PostContext";
import { Component } from "react";
import { v4 } from "uuid";

const initialPosts = [
  {
    id: v4(),
    title: "HTML",
    description:
      "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.",
    imageUrl:
      "https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4099.jpg?t=st=1720411388~exp=1720414988~hmac=868f50872a86b019e4744fa067114633864db7c17a06500e65e92c8b03e5b49a&w=740",
  },
  {
    id: v4(),
    title: "CSS",
    description:
      "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2012/04/10/23/59/css-27192_1280.png",
  },
  {
    id: v4(),
    title: "JavaScript",
    description:
      "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
  },
  {
    id: v4(),
    title: "Python",
    description:
      "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_960_720.png",
  },
];

class App extends Component {
  state = {
    postItemsList: [],
  };

  componentDidMount() {
    const posts = localStorage.getItem("Posts");
    if (posts === null) {
      localStorage.setItem("Posts", JSON.stringify(initialPosts));
      this.setState({ postItemsList: initialPosts });
    } else {
      this.setState({ postItemsList: JSON.parse(posts) });
    }
  }

  updatePostToLocalStorage = () => {
    const { postItemsList } = this.state;
    localStorage.setItem("Posts", JSON.stringify(postItemsList));
  };

  addNewPost = (newPost) => {
    this.setState(
      (prevState) => ({
        postItemsList: [...prevState.postItemsList, newPost],
      }),
      this.updatePostToLocalStorage
    );
  };

  editPost = (post) => {
    this.setState(
      (prevState) => ({
        postItemsList: prevState.postItemsList.map((eachPostItem) => {
          if (eachPostItem.id === post.id) {
            return post;
          }
          return eachPostItem;
        }),
      }),
      this.updatePostToLocalStorage
    );
  };

  deletePost = (id) => {
    const { postItemsList } = this.state;
    const updatedPostItemsList = postItemsList.filter(
      (eachPost) => eachPost.id !== id
    );
    this.setState(
      { postItemsList: updatedPostItemsList },
      this.updatePostToLocalStorage
    );
  };

  render() {
    const { postItemsList } = this.state;
    return (
      <PostContext.Provider
        value={{
          postItemsList,
          addNewPost: this.addNewPost,
          editPost: this.editPost,
          deletePost: this.deletePost,
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Post} />
          <Route exact path="/createPost" component={CreatePost} />
          <Redirect to="/" />
        </Switch>
      </PostContext.Provider>
    );
  }
}

export default App;
