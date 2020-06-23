import React, { Component } from 'react';

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
    render() {
        return(
            <div className="formContainer">
                <form onSubmit={this.submitHandle} className="signin">
                    <h4>Sign In</h4>
                    <labal htmlFor="email">Email</labal>
                    <input type="email" id="email" onChange={this.handleChange}/>

                    <labal htmlFor="password">Password</labal>
                    <input type="password" id="password" onChange={this.handleChange}/>
                    <button className="signinBtn">Login</button>
                </form>

            </div>
        )
    }
}

export default SignIn;