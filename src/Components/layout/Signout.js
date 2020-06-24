import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../../firebase.js';
import 'firebase/auth';

class Login extends Component {

    loggedOut = () => {  firebase.auth().signOut().then(function() {
        console.log("Im logged out");
      }).catch(function(error) {
        console.log(error);
      })
        window.location.reload(true);
    }
    render() {
    return(
        <ul className="right">
            <li><NavLink to ='/' onClick={this.loggedOut}>Log Out</NavLink></li>
            <li><NavLink to ='/journal' className="btn btn-floating purple">JD</NavLink></li>
        </ul>
    )
    }
}

export default Login;