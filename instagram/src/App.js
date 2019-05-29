import React from 'react';

import WithAuthenticate from './authentication/withAuthenticate';
import PostsPage from './components/PostsPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  
  render() {
    const ComponentFromWithAuthenticate =     WithAuthenticate(PostsPage);

    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

export default App;
