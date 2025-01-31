"use client";

import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <img className="logo" src="/images/logoWhite.png" alt="Logo White" />
            <nav className="nav-links">
                <a href="#">Про подію</a>
                <a href="#">Статистика</a>
                <a href="#">Контакти</a>
                <button className='partner-btn'>Стати партнером</button>
            </nav>
{/*             
            <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                ☰
            </div>
            <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <a href="#" onClick={closeMenu}>Про подію</a>
                <a href="#" onClick={closeMenu}>Статистика</a>
                <a href="#" onClick={closeMenu}>Контакти</a>
                <button className="partner-button" onClick={closeMenu}>Стати партнером</button>
            </nav> */}
        </header>
    );
};

export default Header;