import React from 'react';
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <HashLink to="/#" smooth>Start</HashLink>
            <HashLink to="/#simple-steps" smooth>O co chodzi?</HashLink>
            <HashLink to="/#about-us" smooth>O nas</HashLink>
            <HashLink to="/#who-we-help" smooth>Fundacje i organizacje</HashLink>
            <HashLink to="/#contact" smooth>Kontakt</HashLink>
            <Link to="logowanie">Zaloguj</Link>
            <Link to="rejestracja">Załóż konto</Link>
        </nav>
    );
};

export default Navigation;