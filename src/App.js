import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from './firebase.js';
import 'firebase/auth';
import Nav from './Components/layout/Nav';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import TravelDiary from './Components/project/TravelDiary';
import SignIn from './Components/authenication/SignIn';
import SignUp from './Components/authenication/SignUp';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }
  }

  updateState = (a) => {
     console.log('user: ', a);
    this.setState({
      user: a,
    })
    console.log(a);
  }
    
  render() {
  return (
    <BrowserRouter >
      <div className="App">
        <Nav />
        <Header />
        
        {
          this.state.user ?  <TravelDiary  user={this.state.user}/> :  <SignIn updateState={this.updateState}/>
          }
          {
          !this.state.user ?  <SignUp updateState={this.updateState}/> :  <div></div>
        }
        <Footer />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
