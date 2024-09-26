import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const links = [
        {name: 'Home', to:'home'},
        {name: 'Gellery', to:'gallery'},
        {name: 'Featears', to:'featears'},
        {name: 'Category', to:'category'},
        {name: 'Login', to:'category'}
    ];
    return (
        <header>
            <nav className='flex justify-between items-center w-full h-[10vh] glass fixed z-[999] px-[10vw]'>
                <h2 className='text-5xl text-purple-400 font-me'>Orchid's</h2>
                <ul className='flex gap-8'>
                    {
                        links.map((link, index) => <li className={`${index=== 4 && 'ml-20 py-1 relative log overflow-hidden z-[800] px-10 rounded-full border-2 border-purple-400'}`}><NavLink className={`font-me text-purple-300 text-2xl`} to={link.to}>{link.name}</NavLink></li>)
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;