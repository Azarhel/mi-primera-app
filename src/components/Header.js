import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
// import Logo from '../assets/newLogo.png'

const Header = () => {
    let Links = [
        { name: "Inicio", link: "/" },
       
       { name: "Servicios", link: "#servicios"},
       { name: "Acércate a nosotros", link: "#about"},
        { name: "Información", link: "#contacto"},
        
        
    ];
   



    return (
        <nav className="bg-black text-white flex justify-center p-4 fixed z-50">
        <ul className="flex space-x-4">
            {Links.map((link, index) => (
                <li key={index}>
                    <a href={link.link} className="hover:underline">{link.name}</a>
                </li>
            ))}
        </ul>
        <div className="ml-auto">
            <span className="text-lg font-bold">OS-CAR Fotografia</span>
        </div>
    </nav>
    );
};

export default Header;