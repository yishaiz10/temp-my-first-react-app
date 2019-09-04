import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
// import axios from 'axios';
import axios from "../../axios";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                {/* <a href="/">Home</a> */}
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>

                {/* <Link
    to={{
    pathname: this.props.match.url +  "/new-post",
    hash: "#submit",
    search: "?quick-submit=true"
}}
>New Post (relative path)
</Link> */}
              </li>
            </ul>
          </nav>
        </header>

        {/* <Posts></Posts> */}
        {/* <Route path="/" exact render={ () =><h1>Home</h1> }/> */}
        {/* <Route path="/" exact render={ () =><h1>Home 2</h1> }/> */}

        {/* <Route path="/new-post" exact render={ () =><h1>New post</h1> }/> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
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
