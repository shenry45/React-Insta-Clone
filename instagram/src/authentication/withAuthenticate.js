import React from 'react';

import Login from '../components/Login/Login';

const withAuthenticate = FirstComp =>
  class extends React.Component {   

    render() {
      if (localStorage.getItem('username')) {
        return (
          <FirstComp />
        )
      } else {
        return (
          <Login loggedIn={this.props.loggedIn} changeHandler={this.props.changeHandler} logInHandler={this.props.logInHandler}/>
        )
      }
    }
  }

export default withAuthenticate;