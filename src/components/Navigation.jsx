import React from 'react';
import {NavHashLink} from "react-router-hash-link";


const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation__container-secondary">
                <NavHashLink className="navigation__link navigation__link--secondary" smooth to={"logowanie"}>Zaloguj</NavHashLink>
                <NavHashLink className="navigation__link navigation__link--secondary" smooth to={"rejestracja"}>Załóż konto</NavHashLink>
            </div>
            <div className="navigation__container-primary">
                <NavHashLink className="navigation__link navigation__link--primary" smooth to={"/"}>Start</NavHashLink>
                <NavHashLink className="navigation__link navigation__link--primary" smooth to={"/#simple-steps"}>O co chodzi?</NavHashLink>
                <NavHashLink className="navigation__link navigation__link--primary" smooth to={"/#about-us"}>O nas</NavHashLink>
                <NavHashLink className="navigation__link navigation__link--primary" smooth to={"/#who-we-help"}>Fundacje i
                    organizacje</NavHashLink>
                <NavHashLink className="navigation__link navigation__link--primary" smooth to={"/#contact"}>Kontakt</NavHashLink>
            </div>
        </nav>
    );
};

export default Navigation;