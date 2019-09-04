import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../../axios";

import "./Posts.css";
import Post from "../../../components/Post/Post";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };

componentDidMount() {
    console.log("props", this.props);

    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  // deletePostHandler = () => {
  //     axios.delete('/posts/' + this.props.id)
  //         .then(response => {
  //             console.log(response);
  //         });
  // }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
return (
    <Post
        key={post.id}
        title={post.title}
        author={post.author}
        {...this.props.match}

        clicked={() => this.postSelectedHandler(post.id)}
    />
);
      });
    }

    return <section className="Posts">{posts}</section>;

    //     let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    //     if ( this.props.id ) {
    //         post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    //     }
    //     if ( this.state.loadedPost ) {
    //         post = (
    //             <div className="FullPost">
    //                 <h1>{this.state.loadedPost.title}</h1>
    //                 <p>{this.state.loadedPost.body}</p>
    //                 <div className="Edit">
    //                     <button onClick={this.deletePostHandler} className="Delete">Delete</button>
    //                 </div>
    //             </div>

    //         );
    //     }
    // return post;
  }
}

export default Posts;
