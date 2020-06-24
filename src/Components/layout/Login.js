import React from 'react';

class Signout extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
    return(
        <ul className="right">
            <li><a onClick={this.props.showSignUp}>Sign Up</a></li>
            <li><a onClick={this.props.showLogin}>LogIn</a></li>
        </ul>
    )
    }
}

export default Signout;