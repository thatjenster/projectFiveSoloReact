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
      showLogin: false,
      showSignUp: false,
      showHeader: true,
      showDiary: false
    }
  }

  updateState = (a) => {
     console.log('user: ', a);
    this.setState({
      user: a,
    })
    console.log(a);
  }

  showDiary = () => {
    this.setState({
      showDiary: true,
      showLogin: false,
      showSignUp: false,
      showHeader: false
    })
    console.log('is state updateing');
  }

  showLogin = () => {

    console.log('running2');
    this.setState({
      showLogin: true,
      showDiary: false,
      showSignUp: false,
      showHeader: false
    })
  }

    showSignUp = () => {

      console.log('running1');
      this.setState({
        showDiary: false,
        showLogin: false,
        showSignUp: true,
        showHeader: false
      })

  }
    
  render() 
  {
    let showItem;
    if(this.state.showSignUp && !this.state.showHeader ) {
     showItem =  <SignUp updateState={this.updateState}/> ;
    } else if (this.state.showLogin && !this.state.showHeader ){
      showItem = <SignIn updateState={this.updateState} updateDiary={this.showDiary}/> ;
    } else if (this.state.showDiary){
      showItem = <TravelDiary  user={this.state.user}/>;
      console.log('are we in here');
    } 
    else{
      showItem = <Header />;
    }
  return (
    <BrowserRouter >
      <div className="App">
        <Nav showLogin={this.showLogin} showSignUp={this.showSignUp}/>

        <div className="mainSectionContainer">
        {/* {this.state.showSignUp ?  <SignUp updateState={this.updateState}/> :  <Header />}
        {this.state.showLogin ?  <SignIn updateState={this.updateState}/> :  <Header />} */}
        {showItem}
   
          {/* {
          !this.state.user ?  <SignUp updateState={this.updateState}/> :  <div></div>
        } */}
        </div>
      
        <Footer />
      </div>
    </BrowserRouter>
  )
  }
}
export default App;
