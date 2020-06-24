import React from 'react';
import { NavLink } from 'react-router-dom';

class Signout extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
    return(
        <ul className="right">
            {/* <li><NavLink to ='/signup'>Signup</NavLink></li> */}
            {/* <li><NavLink to ='/signin' onClick={this.props.showLogin}>LogIn</NavLink></li> */}
            <li><a onClick={this.props.showSignUp}>Sign Up</a></li>
            <li><a onClick={this.props.showLogin}>LogIn</a></li>

        </ul>
    )
    }
}

export default Signout;