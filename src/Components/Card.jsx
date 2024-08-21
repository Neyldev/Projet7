
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, cover, id }) => {
    return (
        <div className="card">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
            <Link to={`/logement/${id}`} className='link'></Link>
        </div >
    );
};

export default Card;
