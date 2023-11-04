import React from 'react';
import Heading from "./Heading.jsx";
import DiamondCard from "./DiamondCard/DiamondCard.jsx";
import HomeContact from "./HomeContact.jsx";
import HomeFooter from "./HomeFooter.jsx";
import FormHeader from "./FormHeader/FormHeader.jsx";

const DonateItems = () => {
    return (
        <>
            <div className='donate-items'>
                <div className='donate-items__hero'>
                    <div className='donate-items__img-container'>
                        <img className='donate-items__hero-img' src="src/assets/Form-Hero-Image.jpg" alt="cloth"/>
                    </div>
                    <div className='donate-items__title-container'>
                        <Heading text1='Oddaj rzeczy których już nie chcesz' text2='Potrzebujęcym'/>
                        <h2 className='donate-items__subtitle'>Wystarczą 4 proste kroki</h2>
                        <div className='donate-items__diamond-card-container'>
                            <DiamondCard number='1' text='Wybierz rzeczy'/>
                            <DiamondCard number='2' text='Spakuj je w worki'/>
                            <DiamondCard number='3' text='Wybierz fundację'/>
                            <DiamondCard number='4' text='Zamów kuriera'/>
                        </div>
                    </div>
                </div>
                <FormHeader title='Ważne!' text='Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'/>
                <form className='donate-form'>

                </form>

            </div>
            <HomeContact/>
            <HomeFooter/>
        </>
    );
};

export default DonateItems;