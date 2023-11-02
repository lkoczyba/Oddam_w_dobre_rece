import React from 'react';
import Heading from "./Heading.jsx";
import {NavLink} from "react-router-dom";

const Logout = () => {
    return (
        <div className='logout'>
            <Heading text1='wylogowanie nastąpiło' text2='pomyślnie'/>
            <NavLink className="button button--small button--border" to={"/"}>Strona główna</NavLink>
        </div>
    );
};

export default Logout;