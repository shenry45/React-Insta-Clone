import React from 'react';

class Login extends React.Component {

  changeHandler = e => {    
    this.setState({
      username: e.target.value
    })
  }

  logInHandler = e => {
    e.preventDefault();

    // add username to localStorage
    localStorage.setItem('username', this.state.username);
  }
  
  render() {
    return (
      <form className="login" onSubmit={this.logInHandler}>
        <input type="text" name="username" className="username" onChange={this.changeHandler}></input>
        <input type="text" name="password" className="password"></input>
        <input type="submit" onClick={this.logInHandler}placeholder="Log In"></input>
      </form>  
    )
  }
}

export default Login;