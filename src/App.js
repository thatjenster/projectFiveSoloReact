import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
      showLogin: false,
      showSignUp: false,
      showHeader: true,
      showDiary: false,
      displayName: ''
    }
  }

  updateState = (a) => {
    this.setState({
      user: a,
      
    })
  }

  showDiary = () => {
    this.setState({
      showDiary: true,
      showLogin: false,
      showSignUp: false,
      showHeader: false
    })
  }

  showLogin = () => {
    this.setState({
      showLogin: true,
      showDiary: false,
      showSignUp: false,
      showHeader: false
    })
  }

  showSignUp = () => {
    this.setState({
      showDiary: false,
      showLogin: false,
      showSignUp: true,
      showHeader: false
    })

  }
  updateDisplayName = (name) => {
    this.setState ({
      displayName: name
    })
  }
    
  render() {
    let showItem;

    if(this.state.showSignUp && !this.state.showHeader ) {
      showItem =  <SignUp updateState={this.updateState} updateDisplayName={this.updateDisplayName} showLogin={this.showLogin}/> ;
    } else if (this.state.showLogin && !this.state.showHeader ){
      showItem = <SignIn updateState={this.updateState} updateDiary={this.showDiary} updateDisplayName={this.updateDisplayName} /> ;
    } else if (this.state.showDiary){
      showItem = <TravelDiary  user={this.state.user} />;
    } 
    else{
      showItem = <Header />;
    }

  return (
    <BrowserRouter >
      <div className="App">
        <Nav showLogin={this.showLogin} showSignUp={this.showSignUp} user={this.state.user} displayName={this.state.displayName}/>
        <div className="mainSectionContainer">
        {showItem}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
  }
}
export default App;
