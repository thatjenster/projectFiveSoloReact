import React from 'react';
import Swal from 'sweetalert2';

const Header = () => {
    function displayInfo(e){
        Swal.fire({
            title: 'How to use:',
            html: '1. Sign up with any email address to Begin. (DON\'T WORRY... you don\'t need to use a real e-mail address, just an e-mail in correct format).' + ' <br/><br/>' + '2. This site does not send any spam emails &#128523;' + ' <br/><br/>' + '3. Once Signed in, Enter a Travel Memory and see it plot on the map!',
            showConfirmButton: false,
            timer: 5500,
            showClass: {popup: 'animate__animated animate__bounce'},
            showCloseButton: true,
            showCloseButtonColor: 'pink'
        })
      }
      

    return(
        <div id="homePage" className="wrapper">
            <div className="photo">
            <img className="headerPhoto" src="https://picsum.photos/640/360" ></img>
            <div className="titleHeader">Memories: A Personal Travel Diary
                <span className="infoBox" onClick={displayInfo}>
                    <a>&#x24D8;</a>
                </span>
            </div>
            </div>
        </div>
    )
}

export default Header;