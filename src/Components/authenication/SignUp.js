import React, { Component } from 'react';
import firebase from './../../firebase.js';
import 'firebase/auth';
import Swal from 'sweetalert2';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        lastName: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submitHandle = (event) => {
        event.preventDefault();
    }
    signUp = () => {
        const email = document.querySelector('#emailup').value;
        const password = document.querySelector('#passwordup').value;
        const firstName = document.querySelector('#name').value;
        const lastName = document.querySelector('#lastName').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((u) => {
            u.user.updateProfile({
                displayName: `${firstName} ${lastName}`
            }).then(() => {
                this.props.updateDisplayName(u.user.displayName);
            })
            Swal.fire({
                title: 'Yay, Please proceed to login',
                type: 'success',
                text: 'Have a Happy Memory!',
                confirmButtonColor: '#846075',
            }).then((result) => {
                if(result.value) {
                    this.props.showLogin();
                }
            })
    
          }).catch((err) => {
            Swal.fire({
                title: 'Please Register Again!',
                type: 'error',
                text: err.message,
                confirmButtonColor: '#846075',
                cancelButtonColor: '#1A1423',
            })
        })
    }
    
    render() {
        return(
            <div className="formContainer">
                <form onSubmit={this.submitHandle} className="signin">
                    <h4>Register</h4>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="emailup" onChange={this.handleChange}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="passwordup" onChange={this.handleChange}/>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange}/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={this.handleChange}/>

                    <button className="signinBtn" onClick={this.signUp}>Register</button>
                </form>

            </div>
        )
    }
}

export default SignUp;