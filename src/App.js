import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Components/layout/Nav';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import TravelDiary from './Components/project/TravelDiary';
import SignIn from './Components/authenication/SignIn';
import SignUp from './Components/authenication/SignUp';


class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/journal' component={TravelDiary} />
          <Route path='/signin' component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
