import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import './PostContainer.css';

function PostContainer(props) {
  return (
    <div className="post-container">
      {
        props.posts.map(post => (
          <Post
            post={post}
            key={Math.ceil(Math.random()*10000)}
            likeHandler={props.likeHandler}
            commentHandler={props.commentHandler}  
          />
        ))
      }
    </div>
  )
}

PostContainer.propTypes = {
  posts: PropTypes.array
}

export default PostContainer;