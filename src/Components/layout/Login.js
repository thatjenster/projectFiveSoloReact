import React from 'react';

class Signout extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
    return(
        <ul className="right">
            <li><button onClick={this.props.showSignUp}>Sign Up</button></li>
            <li><button onClick={this.props.showLogin}>LogIn</button></li>
        </ul>
    )
    }
}

export default Signout;