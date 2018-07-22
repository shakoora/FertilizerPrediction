import React, { Component } from 'react';
import './App.css';
import fire from './Config/Fire';
import Login from './Login';
import Home from './Home';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
     <div className="App">
        {this.state.user ? ( <Home/>) : (<Login />) }  
   </div>
    );
  }
}

export default App;
