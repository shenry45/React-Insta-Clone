import React from 'react';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    }
  }

  likeHandler = e => {
    e.preventDefault();

    // get parent of clicked like btn
    const targetEl = e.target.parentNode.parentNode.parentNode.parentNode;
    // get username of post for like tracking
    const targetUser = targetEl.querySelector('.username').innerText;

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
        <PostContainer posts={this.state.dummyData} likeHandler={this.likeHandler}/>
      </div>
    )
  }
}

export default App;
