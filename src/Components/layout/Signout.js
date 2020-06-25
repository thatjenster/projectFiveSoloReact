import React, { Component } from 'react';
import firebase from '../../firebase.js';
import 'firebase/auth';
import Swal from 'sweetalert2';

class Login extends Component {
    loggedOut = () => {  firebase.auth().signOut().then( () => {
      Swal.fire({
        title: `${this.props.displayName}, Thanks for writing a Memory`,
        text: 'Come back soon!',
        type: 'success',
        confirmButtonText: 'LOGOUT',
        confirmButtonColor: '#846075',
      }).then(() => {
        window.location.reload(true);
      })
      }).catch(function(error) {
        Swal.fire({
          title: 'Please Try Again',
          text: error.message,
          type: 'error',
          confirmButtonColor: '#846075',
      })
    })
        
    }
    render() {
      let name = this.props.displayName;
      let initials = name.match(/\b\w/g) || [];
      initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return(
      <div className="contentContainer">
        <div class="navBtn">
          <button onClick={this.loggedOut}>Log Out</button>
          <span className="initalDisplay pink lighten-4" >{initials}</span>
        </div>
      </div>
    )
    }
}

export default Login;