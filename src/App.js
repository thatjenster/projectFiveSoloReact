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
      user: '',
      personalMemory: 'pm',
    }
  }

  // updateUser = (newUser, newMemory) => {
  //   this.setState = {
  //     user: newUser,
  //     personalMemory: newMemory,
  //   }
  // }


  login = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    let user, newData;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {

        console.log(u.user.uid);
        // console.log('test');
        
        // firebase.database().ref('users/' + u.user.uid).on('value', response => {
        //   console.log(response);
    
        //   const data = response.val();
        //   console.log(data);
        //   for (let key in data) {
        //     newData.push({
        //       log: data[key],
        //       id: key
        //     });
        //   }

        //   console.log(newData);
        //   user = u;


        // });
        // console.log('Successfully Logged In');

        // // this.updateState(user, newData);

        // console.log(user.user.uid)

       user = u;
       this.updateState(user);
      })
      .catch((err) => {
        console.log(err);
      })

      
  }

  updateState = (a) => {
     console.log('user', a);
    this.setState = ({
      user: a,
    },()=> {console.log('stateupdated')})
    console.log(a);
  }
    
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/journal' render={(props) => <TravelDiary {...props} user={this.user} personalMemory={this.personalMemory} /> } />
          <Route path='/signin' render={(props) => <SignIn {...props} login={this.login} updateState={this.updateState}/> } />
          <Route path="/signup" render={(props) => <SignUp {...props} updateUser={this.updateUser} /> } />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
