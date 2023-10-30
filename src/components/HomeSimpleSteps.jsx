import React from 'react';
import Heading from "./Heading.jsx";
import {NavLink} from "react-router-dom";
import StepCard from "./StepCard.jsx";

const HomeSimpleSteps = () => {
    return (
        <section className="simple-steps" id="simple-steps">
            <Heading text1='Wystarczą 4 proste kroki'/>
            <div className='simple-steps__cards-container'>
            <StepCard iconURL='src/assets/Icon-1.svg' title='Wybierz rzeczy' text='ubrania, zabawki, sprzęt i inne'/>
            <StepCard iconURL='src/assets/Icon-2.svg' title='Spakuj je' text='skorzystaj z worków na śmieci'/>
            <StepCard iconURL='src/assets/Icon-3.svg' title='Zdecyduj komu chcesz pomóc' text='wybierz zaufane miejsce'/>
            <StepCard iconURL='src/assets/Icon-4.svg' title='Zamów kuriera' text='kurier przyjedzie w dogodnym terminie'/>
            </div>
            <NavLink className='button button--big button--border' to='/logowanie'>Oddaj rzeczy</NavLink>
        </section>
    );
};

export default HomeSimpleSteps;