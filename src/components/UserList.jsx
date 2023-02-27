import React, { Component } from "react";
import { connect } from "react-redux";


/*
component user list 
digunakan untuk menampilkan data untuk users list 
*/
class UserList extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

// function mapStateToProps digunakan untuk mereturn data user 
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserList);
