import React from 'react';

const Equipement = ({ equipements = [] }) => {
    return (
        <div className="equipement-container">
            {equipements.map((equipment, index) => (
                <span key={index} className="equipment">
                    {equipment}
                </span>
            ))}
        </div>
    );
};

export default Equipement;
