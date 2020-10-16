import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

function Header() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 918){
                setShow(true);
            }else setShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[])

    return (
        <div className={`header ${show && "header__dark"}`} id="home">
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

