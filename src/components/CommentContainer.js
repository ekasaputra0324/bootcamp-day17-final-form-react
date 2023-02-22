
import React from 'react';

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log(props);
    }
    render() {
        return(
            <div className='ui container comments'>
                <div className='comment'>
                    <a href='/' className='avatar'>
                        <img alt='avatar' src={this.props.avatar}></img>
                    </a>
                </div>
                <div className='content'>
                    <a href='/' className='author'>
                     {this.props.name}    
                    </a> 
                </div>
                <div className='metadata'>
                    <a href='/' className='date'>
                    at {this.props.time}    
                    </a> 
                </div>
                <div className='text'>{this.props.comment}</div>
            </div>
        )
    }
}

export default CommentContainer