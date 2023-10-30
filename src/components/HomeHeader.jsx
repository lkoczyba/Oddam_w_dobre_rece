import React from 'react';
import Heading from "./Heading.jsx";
import {NavLink} from "react-router-dom";

const HomeHeader = () => {
    return (
        <header className='header'>
            <div className='header__container-img'>
                <img className='header__img' src="src/assets/Home-Hero-Image.jpg" alt="items"/>
            </div>
            <div className='header__container-title'>
                <Heading text1={'Zacznij pomagać!'} text2={'Oddaj niechciane rzeczy w zaufane ręce'}/>
                <div className='header__container-CTA'>

                        <NavLink className='button button--big button--border' to='/logowanie'>oddaj rzeczy</NavLink>


                        <NavLink className='button button--big button--border' to='/logowanie'>zorganizuj zbiórkę</NavLink>

                </div>
            </div>
        </header>
    );
};

export default HomeHeader;