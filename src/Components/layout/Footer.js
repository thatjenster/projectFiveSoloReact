import React, { Component } from 'react'

const Footer = () => {
    return(
        <div>
            <footer className="mainFooter">
                <p>Develop and Design by @thatjenster</p>
                <div className="footerSocial">
                    <li>
                        <a href="https://twitter.com/thatjenster"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/that-jenster"><i className="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jennyt.dinh/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                </div>
            </footer>
        </div>
    )
}

export default Footer;