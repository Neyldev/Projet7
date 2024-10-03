import React from 'react';

const Banner = ({ imgSrc, content }) => {
    return (
        <div className='Banner'>
            <img src={imgSrc} alt="Paysage" className='AboutImg' />
            <p className='BannerText'>
                {content}
            </p>
        </div>
    );
}

export default Banner;
