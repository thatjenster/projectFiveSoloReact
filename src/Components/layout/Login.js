import React from 'react';

class Signout extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
    return(
        <div class="contentContainer">
            <div class="navBtn">
                <button onClick={this.props.showSignUp}>Sign Up</button>
                <button onClick={this.props.showLogin}>LogIn</button>
            </div>
        </div>
    )
    }
}

export default Signout;