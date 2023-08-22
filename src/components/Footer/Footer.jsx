import React from 'react';
import Logo from '../../assets/logo/atcybersport.png'; // Replace with your logo path

const Footer = () => {
    return (
        <footer className="bg-black text-white py-2">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="flex items-center mb-2">
                    <img src={Logo} alt="Logo" className="h-10 w-10 mr-2" />
                    <span className="font-semibold text-lg">AT-Gaming</span>
                </div>
                <p className="text-center">&copy; {new Date().getFullYear()} Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;