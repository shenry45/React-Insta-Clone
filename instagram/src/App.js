import React from 'react';

import WithAuthenticate from './authentication/withAuthenticate';
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
        {WithAuthenticate(PostsPage)}
      </div>
    )
  }
}

export default App;
