import React, { useState } from 'react';
import '@/Assets/style/Scss/Utils/Keyframes.scss';

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='dropdown'>
            <div className='Title-dropdown'>
                {title}
                <i
                    className={`fa-solid fa-chevron-up Btn-dropdown ${isOpen ? 'rotated' : ''}`}
                    onClick={toggleDropdown}
                ></i>
            </div>

            {isOpen && (
                <p className="dropdown-text">
                    {content}
                </p>
            )}
        </div>
    );
};

export default Dropdown;
