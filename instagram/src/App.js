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

    const targetEl = e.target.parentNode.parentNode.parentNode.parentNode;
    const targetUser = targetEl.querySelector('.username');

    this.state.dummyData.forEach(el => {
      if (el.username === targetUser) {
        el.likes++;
      }
    })
  }

  componentDidUpdate = (prevState) => {
    if (this.prevState.dummyData !== this.state.dummyData) {
      this.fetchData(this.state.dummyData);
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
