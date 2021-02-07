import React from 'react'
import { Link } from 'react-router-dom';
import Twitter from '../../imgs/twitter.svg';
import Github from '../../imgs/github.svg';
import Youtube from '../../imgs/youtube.svg';
import Facebook from '../../imgs/facebook.svg';

const Footer = () => {
    return (
        <footer className="footer ">
            <div className="footer__section one">
                <h4 className="footer__section__title">cs community</h4>
                <Link to="/" className="footer__section__link">our projects</Link>
                <Link to="/" className="footer__section__link">students base</Link>
                <Link to="/" className="footer__section__link">our community</Link>
            </div>
            <div className="footer__section">
            <h4 className="footer__section__title">social media</h4>
                <Link to="/" className="footer__section__link"><img src={Twitter} alt="Twitter"/></Link>
                <Link to="/" className="footer__section__link"><img src={Facebook} alt="Facebook"/></Link>
                <Link to="/" className="footer__section__link"><img src={Github} alt="Github"/></Link>
                <Link to="/" className="footer__section__link"><img src={Youtube} alt="Youtube"/></Link>
            </div>
            <div className="footer__section one">
            <h4 className="footer__section__title">about</h4>
            <Link to="/" className="footer__section__link">our projects</Link>
                <Link to="/" className="footer__section__link">students base</Link>
            </div>
            <div className="footer__section one">
            <h4 className="footer__section__title">others</h4>
            <Link to="/" className="footer__section__link">our projects</Link>
                <Link to="/" className="footer__section__link">students base</Link>
            </div>
        </footer>
    )
}

export default Footer
