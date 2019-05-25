import React from 'react';
import Comment from './Comment';

function Post(props) {
  return (
    <div className="post">
      
      <div className="header">
        <div className="post-avatar">
          <img src={props.post.thumbnailUrl} alt=""/>
          <p className="username">{props.post.username}</p>
        </div>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      
      <img className="post-image" src={props.post.imageUrl} alt=""/>

      <div className="post-interact">
        <button className="heart" onClick={props.likeHandler}></button>
        <button className="comment"></button>
        <button className="share"></button>
      </div>

      <div className="like-container">
        <p>{props.post.likes} likes</p>
      </div>

      <div className="comments">
        {
          props.post.comments.map(cmnt => (
            <Comment cmnt={cmnt} key={Math.ceil(Math.random()*10000)}/>
          ))
        }
        <form onSubmit={props.commentHandler}>
          <input placeholder="Post a Comment..."></input>
        </form>
      </div>
    </div>
  )
}

export default Post;