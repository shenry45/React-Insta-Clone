import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Post from './Post';
// import './PostContainer.css';

function PostContainer(props) {
  return (
    <PostContainerDiv>
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
    </PostContainerDiv>
  )
}

PostContainer.propTypes = {
  posts: PropTypes.array
}

const PostContainerDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 614px;
  margin: 0 auto;
  padding-top: 60px;

  .post {
    margin-bottom: 60px;
    border: 1px solid #dbdbdb;
    width: 100%;
  }

  .header {
    background: #fff;
    padding: 16px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    .post-avatar {
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      img {
        height: 32px;
        border-radius: 50%;
      }

      p {
        margin: 0 0 0 16px;
      }
    }

    img {
      height: 100%;
    }
  }

  .post-image {
    width: 100%;
    vertical-align: top;
  }

  .post-interact, .like-container, .comments {
    background: #fff;
  }

  .post-interact {
    padding: 8px 16px 0px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;

    button {
      background: transparent;
      border: none;
      width: 24px;
      height: 24px;
      padding: 16px;
      margin-right: 8px;
      outline: none;

      &.heart {
        background: url('/uploads/heart.png');
        background-repeat: no-repeat;
        background-position: center;
      }
      &.comment {
        background: url('/uploads/comment.png');
        background-repeat: no-repeat;
        background-position: center;
      }
      &.share {
        background: url('/uploads/share.png');
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }
  }

  .like-container {
    padding: 5px 16px;
    display: block;
    font-weight: 600;
  }

  .comments {
    width: 100%;
    padding: 0 16px 8px;

    p {
      padding-top: 5px;
    }

    span {
      font-weight: 600;
      margin-right: 10px;
    }

    form {
      width: 100%;
      padding-top: 15px;

      input {
        width: 100%;
        padding: 10px;
      }
    }
  }
`;

export default PostContainer;