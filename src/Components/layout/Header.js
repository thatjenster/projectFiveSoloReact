import React from 'react';
import Swal from 'sweetalert2';

const Header = () => {

    // let infoBox = document.querySelector('.photo');
    function displayInfo(e){
        Swal.fire({
            title: 'How to use:',
            text: `Sign up with any email address to Start using.
            Don't worry, you don't need to use a real e-mail address.
            Once Signed in, Enter a Travel Memory and see it plot on the map!`,
            showConfirmButton: false,
            timer: 2000,
            showClass: {popup: 'animate__animated animate__bounce'}
        })
      }
      

    return(
        <div id="homePage" className="wrapper">
            <div className="photo">
            <img className="headerPhoto" src="https://picsum.photos/640/360" ></img>
            <div className="titleHeader">Memories: A Personal Travel Diary<span className="infoBox" onClick={displayInfo}>&#x24D8;</span></div>
            </div>
        </div>
    )
}

export default Header;