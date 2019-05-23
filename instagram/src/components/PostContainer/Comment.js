import React from 'react';

const Comment = props => {

  /* attempt at filter hashtags then styling them */
  // const hashTagFilter = () => {
  //   let splitText = props.cmnt.text.replace('#','<>#');
  //   splitText = splitText.split('<>')

  //   return splitText;
  // }

  return (
    <p>
      <span>{props.cmnt.username}</span>
      {props.cmnt.text}
    </p>
  )
}

export default Comment;