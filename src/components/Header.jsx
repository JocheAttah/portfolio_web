import React from 'react';
import { HashLink } from 'react-router-hash-link';
function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <HashLink className="header__container--link" to="/#home">Home</HashLink>
                <HashLink className="header__container--link" to="/#fProjects">Featured Projects</HashLink>
                <HashLink className="header__container--link" to="/#oProjects">Other projects</HashLink>
                <HashLink className="header__container--link" to="/#about">About</HashLink>
                <HashLink className="header__container--link" to="/#contact">Contact</HashLink>                
            </div>            
        </div>
    )
}

export default Header

