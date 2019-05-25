import React from 'react';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      commentTyped: ''
    }
  }

  getUsername = (e, key) => {
    let targetEl;

    // different hiearchial structure requires more parent node methods
    if (key === 'like') {
      targetEl = e.target.parentNode.parentNode.parentNode;
    } else {
      // get parent of clicked like btn
      targetEl = e.target.parentNode.parentNode;
    }
    // get username of post for like tracking
    let targetUser = targetEl.querySelector('.username').innerText;
  

    return targetUser;
  }

  likeHandler = e => {
    e.preventDefault();

    const targetUser = this.getUsername(e, 'like');

    // copy dummyData for editing
    const updatedData = this.state.dummyData;
    // find post and add 1 to like count
    updatedData.forEach(el => {
      if (el.username === targetUser) {
        el.likes += 1;
      }
    })

    // set to new state with added likes
    this.setState({dummyData: updatedData});
  }

  commentHandler = e => {
    e.preventDefault();

    const commentInput = e.target.querySelector('input');

    // check if comment is not blank
    if (commentInput.value.length > 0) {
      console.log('comment added', e.target);

      const targetUser = this.getUsername(e, 'comment');
      
      // copy dummyData for editing
      const updatedData = this.state.dummyData;

      updatedData.forEach(el => {
        if (el.username === targetUser) {
          el.comments.push({
            username: "me",
            text: `${commentInput.value}`
          });
        }
      })
      
      // clear input
      e.target.querySelector('input').value = ""

      // set to new state with added likes
      this.setState({dummyData: updatedData});
    }


    /*
    COMMENT BOX TOGGLE ATTEMPT

    // if add comment box is not there
    if (trgtParent.querySelector('.add-comment') === null) {
      // create DOM form for comment submission
      const form = document.createElement('form')
      form.classList.add('add-comment');
      // create DOM input field for comment typing
      const input = document.createElement('input');
      input.setAttribute('onChange', this.state.commentTyped);
      form.appendChild(input);

      // add comment type box to DOM
      trgtParent.querySelector('.comments').appendChild(form);
    } else {
      // remove comment type box from DOM
      trgtParent.querySelector('.add-comment').remove();
    }
    */
  }

  componentDidUpdate(prevState) {
    // if the previous and past props don't match
    if (prevState.dummyData !== this.props.dummyData) {
      // set to new state
      this.setState({
        dummyData: this.state.dummyData
      })
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
          posts={this.state.dummyData}
          likeHandler={this.likeHandler}
          commentHandler={this.commentHandler}  
        />
      </div>
    )
  }
}

export default App;
