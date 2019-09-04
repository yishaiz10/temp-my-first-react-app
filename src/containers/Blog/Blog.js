import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../axios";
import Posts from "./Posts/Posts";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Posts></Posts>
      </div>
    );
  }
}

export default Blog;

{
  /* <section>
        <FullPost id={this.state.selectedPostId} />
    </section>
    <section>
        <NewPost />
    </section> */
}

// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
