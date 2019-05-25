import React from 'react';
import Fuse from 'fuse.js';

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

  getUsername = e => {
    let targetEl = e.target.parentNode.parentNode;

    // get username of post for like tracking
    let targetUser = targetEl.querySelector('.username').innerText;
  
    return targetUser;
  }

  likeHandler = e => {
    e.preventDefault();

    const targetUser = this.getUsername(e);

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

      const targetUser = this.getUsername(e);
      
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
      e.target.querySelector('input').value = "";

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

  searchHandler = e => {
    e.preventDefault();
    
    const searchInput = e.target.querySelector('input');


    // check if comment is not blank
    if (searchInput.value.length > 0) {

      // Fuse search parameters
      let options = {
        threshold: 0.5,
        keys: ['username']
      }
      // Fuse search call using data and parameters
      let fuse = new Fuse(this.state.dummyData, options);

      // assign Fuse search results
      const updatedData = fuse.search(searchInput.value);

      /*
      let updatedData = this.state.dummyData;

      updatedData = updatedData.filter(data => {
        data.username.toLowerCase();
        searchInput.value.toLowerCase();
        return data.username === searchInput.value;
      })
      */
      
      this.setState({
        dummyData: updatedData
      }) 
    }
    else {
      this.setState({
        dummyData: dummyData
      })  
    }
    
    // clear input
    e.target.querySelector('input').value = "";
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
        <SearchBar searchHandler={this.searchHandler} />
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
