import React from 'react';
// import mountfuji from './Assets/mountfuji.png'

const Header = () => {
    return(
        <div id="homePage">
            <div className="photo">
            <img className="headerPhoto" src="https://picsum.photos/640/360"></img>
            <div className="titleHeader">Memories: A Personal Travel Diary</div>
            </div>
        </div>
    )
}

export default Header;