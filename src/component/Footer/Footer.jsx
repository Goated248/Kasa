import React from "react";
import './Footer.css'
import logoDark from '../../assets/LOGO-dark.png'

const Footer = ()=> {
return (
    <footer className="footer">
        <img src={logoDark} alt="Kasa logo"/>
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
)
}
export default Footer