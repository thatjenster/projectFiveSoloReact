import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    // constructor(props) {
    //     super(props);
        state = {
            email: '',
            password: '',
        }
        
    // }
    
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submitHandle = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    // login() {
    //     const email = document.querySelector('#email').value;
    //     const password = document.querySelector('#password').value;
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //       .then((u) => {

    //         console.log(u.user.uid);
    //         firebase.database().ref('users/' + u.user.uid).on('value', response => {
    //           console.log(response);
    //           const newState = [];
    //           const data = response.val();
    //           console.log(data);
    //           for (let key in data) {
    //             newState.push({
    //               log: data[key],
    //               id: key
    //             });
    //           }
    //           console.log(newState);
    //         //   this.setState({
    //         //     personalMemory: newState
    //         //   });
        
    //         });
    //         console.log('Successfully Logged In');
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       })
    //   }
      
    render() {
        return(
            <div className="formContainer">
                <form onSubmit={this.submitHandle} className="signin">
                    <h4>Sign In</h4>
                    <labal htmlFor="email">Email</labal>
                    <input type="email" id="email" onChange={this.handleChange}/>

                    <labal htmlFor="password">Password</labal>
                    <input type="password" id="password" onChange={this.handleChange}/>
                    <Link to='/journal' ><button className="signinBtn" onClick={this.props.login}>LogIn</button></Link>
                    
                </form>

            </div>
        )
    }
}

export default SignIn;