import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';


const Navigation = () => {

    const [scroll, setScroll] = useState(false)
    const {hash} = useLocation();

    useEffect(() => {
        if (hash) {
            const section = document.querySelector(hash);
            console.log(section.offsetTop);
            window.scrollTo({top: section.offsetTop, behavior: 'smooth',});
        } else {
            window.scrollTo({top: 0, behavior: 'smooth',})
        }
        setScroll(false);
    }, [scroll]);


    const handleScroll = () => {
        setScroll(true);
    }

    return (
        <nav className="navigation">
            <div className="navigation__container-secondary">
                <NavLink  className="navigation__link navigation__link--secondary"
                      to={"logowanie"}>Zaloguj</NavLink>
                <NavLink  className="navigation__link navigation__link--secondary"
                      to={"rejestracja"}>Załóż konto</NavLink>
            </div>
            <div className="navigation__container-primary">
                <NavLink onClick={handleScroll} className="navigation__link navigation__link--primary"
                      to={"/"}>Start</NavLink>
                <NavLink onClick={handleScroll} className="navigation__link navigation__link--primary"
                      to={"/#simple-steps"}>O co chodzi?</NavLink>
                <NavLink onClick={handleScroll} className="navigation__link navigation__link--primary" to={"/#about-us"}>O
                    nas</NavLink>
                <NavLink onClick={handleScroll} className="navigation__link navigation__link--primary"
                      to={"/#who-we-help"}>Fundacje i organizacje</NavLink>
                <NavLink onClick={handleScroll} className="navigation__link navigation__link--primary"
                      to={"/#contact"}>Kontakt</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;