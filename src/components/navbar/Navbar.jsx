import React, { useState } from 'react'

import './navbar.css'
import { links } from '../../constants'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (

        <header className='header'>
            <nav className='nav container'>
                <a href="/" className="nav__logo">Christian</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {
                            links.map((link, index) => (
                                <li key={index} className='nav__item'>
                                    <a href={`${link.link}`} className='nav__link'>
                                        <i className={`${link.icon} nav__icon`}></i>
                                        {link.menu}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <i className='uil uil-times nav__close' onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className='uil uil-apps'></i>
                </div>

            </nav>
        </header>
    )

}


export default Navbar