import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='header'>
            <div className='header-lang'>
                <span>semka147semov@gmail.com</span>
                <span>|</span>
                <span>UA: +380  68 878 72 47</span>
            </div>
            <nav>
                <ul className='list'>
                    <a className='navlink' href="#home">Home</a>
                    <a className='navlink' href="#stack">Skills</a>
                    <a className='navlink' href="#about">About</a>
                    <a className='navlink' href="#projects">Projects</a>
                </ul>
            </nav>
        </header>
    );
}
 
export {Navbar};