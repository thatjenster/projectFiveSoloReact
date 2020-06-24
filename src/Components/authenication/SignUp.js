import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './../../firebase.js';
import 'firebase/auth';

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
        console.log(this.state);
    }
    signUp() {
        const email = document.querySelector('#emailup').value;
        const password = document.querySelector('#passwordup').value;
        console.log(email);
        firebase.auth().createUserWithEmailAndPassword(email, password)

          .then((u) => {
            console.log('Successfully Signed Up');
            console.log(u.user.uid);
            this.props.updateState(u.user.uid);

          })
          
          .catch((err) => {
            console.log(err.message);
            alert('HELLO')
          })
    }
    
    render() {
        return(
            <div className="formContainer">
                <form onSubmit={this.submitHandle} className="signin">
                    <h4>Register</h4>
                    <labal htmlFor="email">Email</labal>
                    <input type="email" id="emailup" onChange={this.handleChange}/>

                    <labal htmlFor="password">Password</labal>
                    <input type="password" id="passwordup" onChange={this.handleChange}/>

                    <labal htmlFor="name">Name</labal>
                    <input type="text" id="name" onChange={this.handleChange}/>

                    <labal htmlFor="lastName">Last Name</labal>
                    <input type="text" id="lastName" onChange={this.handleChange}/>

                    <Link to='/journal' ><button className="signinBtn" onClick={this.signUp}>Register</button></Link>
                </form>

            </div>
        )
    }
}

export default SignUp;