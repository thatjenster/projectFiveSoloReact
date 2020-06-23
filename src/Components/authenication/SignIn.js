import React, { Component } from 'react';

class SignIn extends Component {
    state = {

    }
    handleChange = (event) => {
        console.log(event);
    }
    submitHandle = (event) => {
        console.log(event);
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
                    <button>Login</button>
                </form>

            </div>
        )
    }
}

export default SignIn;