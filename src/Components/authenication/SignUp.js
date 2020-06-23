import React, { Component } from 'react';

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
    render() {
        return(
            <div className="formContainer">
                <form onSubmit={this.submitHandle} className="signin">
                    <h4>Register</h4>
                    <labal htmlFor="email">Email</labal>
                    <input type="email" id="email" onChange={this.handleChange}/>

                    <labal htmlFor="password">Password</labal>
                    <input type="password" id="password" onChange={this.handleChange}/>

                    <labal htmlFor="name">Name</labal>
                    <input type="text" id="name" onChange={this.handleChange}/>

                    <labal htmlFor="lastName">Last Name</labal>
                    <input type="text" id="lastName" onChange={this.handleChange}/>
                    <button className="signinBtn">Register</button>
                </form>

            </div>
        )
    }
}

export default SignUp;