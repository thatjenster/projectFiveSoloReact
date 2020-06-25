import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    signUp() {
        const email = document.querySelector('#emailup').value;
        const password = document.querySelector('#passwordup').value;
        const firstName = document.querySelector('#name').value;
        const lastName = document.querySelector('#lastName').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)

          .then((u) => {
            Swal.fire({
                title: 'Yay, Please proceed to login',
                type: 'success',
                text: 'Have a Happy Memory!',
                confirmButtonColor: '#846075',
            })
          })
          
          .catch((err) => {
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

                    <Link to='/journal' ><button className="signinBtn" onClick={this.signUp}>Register</button></Link>
                </form>

            </div>
        )
    }
}

export default SignUp;