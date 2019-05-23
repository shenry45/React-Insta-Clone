import React from 'react';
import Comment from './Comment';

function Post(props) {
  return (
    <div className="post">
      
      <div className="header">
        <div className="post-avatar">
          <img src={props.post.thumbnailUrl} alt=""/>
          <p>{props.post.username}</p>
        </div>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      
      <img className="post-image" src={props.post.imageUrl} alt=""/>

      <div className="post-interact">
        <div className="like-comm-share">
          <a href="#">
            <img src="./uploads/heart.png" alt="See your Likes" />
          </a>
          <a href="#">
            <img src="./uploads/comment.png" alt="" />
          </a>
          <a href="#">
            <img src="./uploads/share.png" alt="" />
          </a>
        </div>
        <a href="#">
          <img src="/uploads/bookmark.png" alt="" />
        </a>
      </div>


      <div className="comments">
        {
          props.post.comments.map(cmnt => (
            <Comment cmnt={cmnt}/>
          ))
        }
      </div>
    </div>
  )
}

export default Post;