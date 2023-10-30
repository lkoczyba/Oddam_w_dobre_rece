import React from 'react';
import Heading from "./Heading.jsx";
import Input from "./Input/Input.jsx";

const HomeContact = () => {

    return (
        <section className="contact" id="contact">
            <form className='contact__form'>
                <Heading text1='Skontaktuj się z nami'/>
                <div className='contact__input-container'>
                    <Input type='text' placeholder='Krzysztof' label='Wpisz swoje imię'/>
                    <Input type='text' placeholder='abc@xyz.pl' label='Wpisz swój email'/>
                </div>
                <Input type='textarea' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' label='Wpisz swoją wiadomość'/>
                <div className='contact__button-wrapper'>
                    <button className='button button--small button--border'>Wyślij</button>
                </div>
            </form>
        </section>
    );
};

export default HomeContact;