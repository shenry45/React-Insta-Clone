import React from 'react';

class Login extends React.Component {  

  render() {
    return (
      <form className="login" onSubmit={this.props.logInHandler}>
        <input className="username" onChange={this.props.changeHandler}></input>
        <input className="password"></input>
        <button onClick={this.props.logInHandler}>Log In</button>
      </form>
    )
  }
}

export default Login;