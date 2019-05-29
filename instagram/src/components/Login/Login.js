import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  changeHandler = e => {
    this.setState({
      username: e.target.value
    })
  }

  logIn = e => {
    e.preventDefault();

    localStorage.setItem('username', `${this.state.username}`);

  }

  render() {
    return (
      <form className="login" onSubmit={this.logIn}>
        <input className="username" onChange={this.changeHandler}></input>
        <input className="password"></input>
        <button onClick={this.logIn}>Log In</button>
      </form>
    )
  }
}

export default Login;