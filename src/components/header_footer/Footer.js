import React from "react";
import { Fade } from 'react-awesome-reveal'
const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade triggerOnce delay={500}>
                <div className="font_righteous footer_logo_venue">Landing Page</div>
                <div className="footer_copyright">Developed with Love by <a className="redirectLink" href="https://www.instagram.com/_david.gama/" >@David</a>🧡</div>
            </Fade>

        </footer>
    )
}

export default Footer;