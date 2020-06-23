import React, { Component } from 'react';
import './Styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Components/layout/Nav';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
