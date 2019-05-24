import React from 'react';
import PropTypes from 'prop-types';

/* attempt at filter hashtags then styling them */

const Comment = props => {
  /*
  const hashTagFilter = () => {
    const separators = ["!", "?", ",", "."];

    let splitText = props.cmnt.text;

    // if text has a # inside
    if (splitText.search('#')) {
      let returnText = splitText.split(' ');
  
      // for each individual string
      returnText.forEach(el => {

        // split based on separators
        separators.forEach(sep => {
          el = el.replace(sep, `<>${sep}`);
        });

        el = el.split('<>');

        if (el.length > 1) {
          el.forEach(el2 => {
            if (el2.search('#')) {
              return `<span class="hashtag">${el2}</span>`;
            }
            console.log(el2);
          })
          el.join('');
        }

        console.log(el);

        return el.join(' ');
      });
    }
  }
  */

  return (
    <p>
      <span>{props.cmnt.username}</span>
      {props.cmnt.text}
    </p>
  )
}

Comment.propTypes = {
  cmnt: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment;