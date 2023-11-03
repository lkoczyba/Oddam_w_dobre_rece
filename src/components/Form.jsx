import React from 'react';
import Heading from "./Heading.jsx";
import DiamondCard from "./DiamondCard/DiamondCard.jsx";

const Form = () => {
    return (
        <div className='form'>
            <Heading text1='Oddaj rzeczy których już nie chcesz' text2='Potrzebujęcym'/>
            <h2 className='form__subtitle'></h2>
            <div className='form__diamond-card-container'>
                <DiamondCard number='1' text='Wybierz rzeczy'/>
                <DiamondCard number='2' text='Spakuj je w worki'/>
                <DiamondCard number='3' text='Wybierz fundację'/>
                <DiamondCard number='4' text='Zamów kuriera'/>
            </div>

        </div>
    );
};

export default Form;