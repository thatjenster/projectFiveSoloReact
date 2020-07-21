import React from 'react';
import Login from './Login'
import Signout from './Signout'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
    return(
        <div>
            <nav className="navWrapper">
                <div className="contentContainer">
                    <Link to="/"><h4 className="navLogo">Travel Memories</h4></Link>
                    {this.props.user ? <Signout displayName={this.props.displayName}/> : <Login showLogin={this.props.showLogin} showSignUp={this.props.showSignUp}/>}
                </div>
            </nav>
        </div>    
    )
    }
}

export default Nav;