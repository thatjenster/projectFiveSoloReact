import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Components/layout/Nav';
import TravelDiary from './Components/project/TravelDiary';
import SignIn from './Components/authenication/SignIn.js';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={TravelDiary} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
