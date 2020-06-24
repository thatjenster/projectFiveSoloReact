import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './../../firebase.js';
import 'firebase/auth';

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
        console.log(this.state);
    }
    login = ()=> {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((u) => {

        console.log(u.user.uid);

        this.props.updateState(u.user.uid);
        this.props.updateDiary();
        
        console.log('Successfully Logged In');
        })
        .catch((err) => {
        console.log(err);
        })
      }
      
    render() {
        return(
            <div className="formContainer">
                <form onSubmit={this.submitHandle} className="signin">
                    <h4>Sign In</h4>
                    <labal htmlFor="email">Email</labal>
                    <input type="email" id="email" onChange={this.handleChange}/>

                    <labal htmlFor="password">Password</labal>
                    <input type="password" id="password" onChange={this.handleChange}/>
                    <Link to='/journal' ><button className="signinBtn" onClick={this.login}>LogIn</button></Link>
                    
                </form>

            </div>
        )
    }
}

export default SignIn;