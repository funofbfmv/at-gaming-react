// src/ScrollToTop.js

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full cursor-pointer ${
                isVisible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </div>
    );
};

export default ScrollToTop;