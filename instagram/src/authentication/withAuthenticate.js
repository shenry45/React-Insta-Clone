import React from 'react';

const WithAuthenticate = FirstComp => SecondComp =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount(){
      console.log('changing loggedin status')
      if (localStorage.getItem('username')) {
        this.setState({
          loggedIn: true
        })
      }
    }

    render() {
      if (this.state.loggedIn === true) {
        return (
          <FirstComp />
        )
      } else {
        return (
          <SecondComp />
        )
      }
    }
  }

export default WithAuthenticate;