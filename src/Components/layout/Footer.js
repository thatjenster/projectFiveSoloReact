import React, { Component } from 'react'

const Footer = () => {
    return(
        <div className="wrapper">
            <footer className="mainFooter">
                <p>Developed and Designed, with love and coffee <span><a href="https://thatjenster.io/" target="_blank">@thatjenster</a></span></p>
                <div className="footerSocial">
                    <li>
                        <a href="https://twitter.com/thatjenster" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/thatjenster" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jennyt.dinh/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                </div>
            </footer>
        </div>
    )
}

export default Footer;