import React from 'react';

import WithAuthenticate from './authentication/withAuthenticate';
import PostsPage from './components/PostsPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: ''
    }
  }


  changeHandler = e => {
    this.state.username = e.target.value;
  }

  logInHandler = e => {
    e.preventDefault();

    localStorage.setItem('username', this.state.username);

    this.setState({
      loggedIn : true
    });
  }
  
  render() {
    const ComponentFromWithAuthenticate = WithAuthenticate(PostsPage);

    return (
      <div className="App">
        <ComponentFromWithAuthenticate
          loggedIn={this.state.loggedIn}
          changeHandler={this.changeHandler}
          logInHandler={this.logInHandler}
        />
      </div>
    )
  }
}

export default App;
