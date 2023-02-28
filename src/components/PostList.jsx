import React, {Component} from "react";
// import { connect } from "react-redux";

import { fetchPosts, fetchPostsAndUsers } from "../action/action";
import UserList from "./UserList";


/*
components post list biasah
digunakan untuk mereturn data post dari API jsonplaceholder 
*/ 
class PostList extends Component {

  componentDidMount() {
    this.props.fetchPostsAndUsers();  
  }
  
  renderList() {
    return this.props.posts.map((post) => (
      <div key={post.id} className="item">
        <i className="large middle aligned user  icon"></i>
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
          </div>
          <p>{post.body}</p>
          <UserList userId={post.userId} />
        </div>
      </div>
    ));
  }

  render() {
    if (!this.props.posts) {
      return null;
    }
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

// export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(
//   PostList
// );
