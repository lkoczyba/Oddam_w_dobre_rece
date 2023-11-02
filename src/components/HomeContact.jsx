import React, {useState} from 'react';
import Heading from "./Heading.jsx";
import Input from "./Input/Input.jsx";
import {validateEmail, validateMessage, validateName} from "../validation.js";

const HomeContact = () => {

    const [values, setValues] = useState({name: '', email: '', message: ''});
    const [errorMessages, setErrorMessages] = useState({name: '', email: '', message: ''});

    const [data, setData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({});
        let isValid = true;

        setErrorMessages({name: '', email: '', message: ''});

        if (validateName(values.name)) {
            isValid = false;
            setErrorMessages(prevState => ({...prevState, name: 'Podane imię jest nieprawidłowe!'}))
        }
        if (validateEmail(values.email)) {
            isValid = false;
            setErrorMessages(prevState => ({...prevState, email: 'Podany email jest nieprawidłowy!'}))
        }
        if (validateMessage(values.message)) {
            isValid = false;
            setErrorMessages(prevState => ({...prevState, message: 'Wiadomość musi mieć 120 znaków!'}))
        }

        if (isValid) {
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                body: JSON.stringify({name: values.name, email: values.email, message: values.message}),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(r => r.json())
                .then(data => {
                    setData(data);
                })
                .catch(() => alert("ups :( coś poszło nie tak. Spróbuj jeszcze raz."));

            setValues({name: '', email: '', message: ''});
        }
    }


    return (
        <section className="contact" id="contact">
            <form noValidate onSubmit={handleSubmit} className='contact__form'>
                <Heading text1='Skontaktuj się z nami'/>
                {data.status === 'success' &&
                    <p className='contact__success'>Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.</p>}
                <div className='contact__input-container'>
                    <Input type='text' placeholder='Krzysztof' label='Wpisz swoje imię' errorMessage={errorMessages.name}
                           value={values.name}
                           onSetValue={(value) => setValues(prevState => ({...prevState, name: value}))}/>
                    <Input type='email' placeholder='abc@xyz.pl' label='Wpisz swój email'
                           errorMessage={errorMessages.email} value={values.email}
                           onSetValue={(value) => setValues(prevState => ({...prevState, email: value}))}/>
                </div>
                <Input textarea={true} errorMessage={errorMessages.message} value={values.message}
                       onSetValue={(value) => setValues(prevState => ({...prevState, message: value}))}
                       placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                       label='Wpisz swoją wiadomość'/>
                <div className='contact__button-wrapper'>
                    <button className='button button--small button--border'>Wyślij</button>
                </div>
            </form>
        </section>
    );
};

export default HomeContact;