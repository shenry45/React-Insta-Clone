import React from 'react';

import PostsPage from './components/PostsPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    )
  }
}

export default App;
