import React, { Component } from 'react';
import firebase from './../../firebase.js';
import 'firebase/auth';
import Swal from 'sweetalert2';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submitHandle = (event) => {
        event.preventDefault();
    }
    login = () => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((u) => {
        this.props.updateState(u.user.uid);
        this.props.updateDiary();
        this.props.updateDisplayName(u.user.displayName);
        })

        .catch((err) => {
            Swal.fire({
                title: 'Please Try Again',
                text: err.message,
                type: 'error',
                confirmButtonColor: '#846075',
                cancelButtonColor: '#1A1423',
            })
        })
    }

    handleClickAnonymously = (e) => {
        e.preventDefault();
        firebase.auth().signInAnonymously()
        .then((u) => {
            console.log(u)
            this.props.updateDiary();
            this.props.updateState(u.user.isAnonymous);
            this.props.updateDisplayName("Anonymous User");
        })
        .catch(error => {
            console.log(error);
        });
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              let isAnonymous = user.isAnonymous;
              let uid = user.uid;
              // ...
            } else {
              // User is signed out.
              // ...
            }
            // ...
          });
    }
      
    render() {
        return(
            <div className="formContainer">
                <form onSubmit={this.submitHandle} className="signin">
                    <h4>Sign In</h4>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                    <button className="signinBtn" onClick={this.login}>LogIn</button>
                    <p> --- OR ---</p>
                    <button className="signinBtn" onClick={this.handleClickAnonymously}> LogIn Anonymously </button>
                </form>

            </div>
        )
    }
}

export default SignIn;