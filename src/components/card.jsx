import React from "react";
import { Comment , Icon} from 'semantic-ui-react'



const CardComments = (props) => {
    // data commentar yang berupa object
    const data = props.data;
    return (
        <div>
        <Comment.Group>
            <Comment>
                {/* mengunkan map untuk mengeluarkan
                 semua isi yang ada di props */}
            {data.map((comment,i ) => { 
                return(
                <><Comment.Avatar as='a' src={comment.image} /><Comment.Content>
                        <Comment.Metadata>{comment.date}</Comment.Metadata>
                        <Comment.Author>{comment.nama}</Comment.Author>
                        <Comment.Text>
                          
                        </Comment.Text>{comment.comments}</Comment.Content></>
                )
                })}
            </Comment>
        </Comment.Group>
        </div>
    )
}
export default CardComments;