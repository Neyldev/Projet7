import React from 'react';
import { Link } from 'react-router-dom'


import logo from '@/Assets/Img/LOGO.png';


const Header = () => {
    return (
        <div className='Header'>
            <nav>
                <img src={logo} alt="Logo Kasa" />
                <ul>
                    <li><Link to="Home">Accueil</Link></li>
                    <li><Link to="About">A Propos</Link></li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;