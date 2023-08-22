import React, { useState, useEffect } from 'react';
import YourLogo from '../../assets/logo/ATC__.png'; // Replace with your logo path
import Home from '../../pages/Home/Home';


const PreLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Simulate loading for 3 seconds

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {isLoading ? (
                <img src={YourLogo} alt="Logo" className="w-16 h-16 animate-spin" />
            ) : null}
        </div>
    );
};

export default PreLoader;