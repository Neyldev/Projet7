
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, cover, id }) => {
    return (
        <Link to={`/logement/${id}`} className='link'>
            <li className="card">
                <img src={cover} alt={title} />
                <h3>{title}</h3>
                <div className='cardsombre'></div>
            </li >
        </Link>
    );
};

export default Card;
