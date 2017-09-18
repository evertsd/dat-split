import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteListContainer from './containers/RouteListContainer'

class App extends Component {
  render() {
    return (
      <main>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <RouteListContainer />
      </main>
    );
  }
}

export default App;
