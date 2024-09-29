import React from 'react';

import GrayStar from '@/Assets/Img/GrayStar.png';
import RedStar from '@/Assets/Img/RedStar.png';

const Rating = ({ rating }) => {
    return (
        <div className='rating'>
            {[...Array(5)].map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? RedStar : GrayStar}
                    alt={index < rating ? 'Étoile red' : 'Étoile vide'}
                />
            ))}
        </div>
    );
};

export default Rating;
