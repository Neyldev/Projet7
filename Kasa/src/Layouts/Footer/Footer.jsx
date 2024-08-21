import React from 'react';



import logoF from '@/Assets/Img/LOGOFooter.png';

const Footer = () => {
    return (
        <div className='Footer'>
            <img src={logoF} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;