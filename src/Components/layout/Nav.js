import React from 'react';
import Login from './Login'
import Signout from './Signout'

class Nav extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
    return(
        <div>
            <nav className="navWrapper">
                <div className="contentContainer">
                    <h4 className="navLogo">Travel Memories</h4>
                    {this.props.user ? <Signout displayName={this.props.displayName}/> : <Login showLogin={this.props.showLogin} showSignUp={this.props.showSignUp}/>}
                </div>
            </nav>
        </div>    
    )
    }
}

export default Nav;