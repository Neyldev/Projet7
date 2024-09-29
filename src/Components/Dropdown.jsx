import React, { useState } from 'react';
import '@/Assets/style/Scss/Utils/Keyframes.scss';

const Dropdown = ({ title, content, liste }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className='dropdown'>
            <div className='Title-dropdown'>
                <h2>{title}</h2>
                <span>
                    <i className={`fa-solid fa-chevron-up Btn-dropdown ${isOpen ? 'rotated' : ''}`} onClick={toggleDropdown}></i>
                </span>
            </div>

            {isOpen && (
                <>
                    {liste ? (
                        <ul className='dropdown-ul'>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="dropdown-text">
                            {content}
                        </p>
                    )}
                </>
            )}
        </li>
    );
};

export default Dropdown;
