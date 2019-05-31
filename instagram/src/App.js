import React from 'react';

import WithAuthenticate from './authentication/withAuthenticate';
import PostsPage from './components/PostsPage';
import Login from './components/Login/Login';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

const ComponentFromWithAuthenticate = WithAuthenticate(PostsPage)(Login);

export default App;
