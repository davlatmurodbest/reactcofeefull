import './header.scss'
import logo from '../assets/img/headerlogo.png'
import { NavLink } from 'react-router-dom'
import { Context as LocalizationCon } from '../Context/localization'
import languages from '../Localization/language'
import React from 'react'

export default function Header() {

    let { lang, setlang } = React.useContext(LocalizationCon)

    return (
        <>
            <header className="header">
                <div className="container">
                    <NavLink to="" className="header__logo">
                        <img src={logo} alt="logo" className="header__icon" width={236} height={26} />
                    </NavLink>
                    <div className="header__info">
                        <select value={lang} onChange={(evt) => setlang(evt.target.value)} >
                            <option value="en">EN</option>
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                        </select>
                        <NavLink to="Home" className="header__link">{languages[lang].home.link1}</NavLink>
                        <NavLink to="about" className="header__link">{languages[lang].home.link2}</NavLink>
                        <NavLink to="create-plan" className="header__link">{languages[lang].home.link3}</NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}