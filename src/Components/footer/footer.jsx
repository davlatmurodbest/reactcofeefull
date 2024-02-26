import './footer.scss'
import foterlogo from '../assets/img/footerlogo.png'
import facebook from '../assets/img/facebook.svg'
import twitter from '../assets/img/Path.svg'
import insta from '../assets/img/insta.svg'
import { NavLink } from 'react-router-dom'
import { Context as lococon } from '../Context/localization'
import languages from '../Localization/language'
import React from 'react'

export default function Footer() {

    let {lang} = React.useContext(lococon)
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <a href="#link" className="footer__logo">
                        <img src={foterlogo} alt="foterlogo" className="footer__pic" width={236} height={26} />
                    </a>
                    <div className="header__info">
                        <NavLink to="Home" className="header__link">{languages[lang].home.link1}</NavLink>
                        <NavLink to="about" className="header__link">{languages[lang].home.link2}</NavLink>
                        <NavLink to="create-plan" className="header__link">{languages[lang].home.link3}</NavLink>
                    </div>
                    <div className="footer__icons">
                        <img src={facebook} alt="face" className="footer__icon" />
                        <img src={twitter} alt="face" className="footer__icon" />
                        <img src={insta} alt="face" className="footer__icon" />
                    </div>
                </div>
            </footer>
        </>
    )
}