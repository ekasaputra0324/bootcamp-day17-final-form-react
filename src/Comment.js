
import React from "react";
import CommentContainer from "./components/Comment/CommentContainer";
import moment from "moment/moment";


class Comments extends React.Component {
    render() {
      return this.props.data.map((dataComment, index) => (
        <div className='CommentContainer' key={index}>
          <CommentContainer
            avatar={dataComment.avatar}
            name={dataComment.name}
            day={moment(dataComment.time).format("ddd")}
            time={moment(dataComment.time).format("LT")}
            comment={dataComment.comment}
            likes={dataComment.like}
          />
        </div>
      ))
    }
}
export default Comments