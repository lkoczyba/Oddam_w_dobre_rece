import React, {useState} from 'react';
import Heading from "./Heading.jsx";
import Input from "./Input/Input.jsx";

const HomeContact = () => {

    const [name, setName] = useState({value: "", errorMessage: ''});
    const [email, setEmail] = useState({value: "", errorMessage: ''});
    const [message, setMessage] = useState({value: "", errorMessage: ''});
    const [data, setData] = useState({})
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({});
        let isValid = true;
        setName(prevState => ({...prevState, errorMessage: ''}));
        setEmail(prevState => ({...prevState, errorMessage: ''}));
        setMessage(prevState => ({...prevState, errorMessage: ''}));

        if (!/^[A-Za-z]+$/.test(name.value)) {
            isValid = false;
            setName(prevState => ({...prevState, errorMessage: 'Podane imię jest nieprawidłowe!'}))
        }
        if (!validateEmail(email.value)) {
            isValid = false;
            setEmail(prevState => ({...prevState, errorMessage: 'Podany email jest nieprawidłowy!'}))
        }
        if (message.value.length <= 120) {
            isValid = false;
            setMessage(prevState => ({...prevState, errorMessage: 'Wiadomość musi mieć 120 znaków!'}))
        }

        if (isValid) {
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                body: JSON.stringify({name: name.value, email: email.value, message: message.value}),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(r => r.json())
                .then(data => {
                    setData(data);
                })
                .catch(err => console.log("err", err));

            setName(prevState => ({...prevState, value: ''}));
            setEmail(prevState => ({...prevState, value: ''}));
            setMessage(prevState => ({...prevState, value: ''}));
        }
    }


    return (
        <section className="contact" id="contact">
            <form onSubmit={handleSubmit} className='contact__form'>
                <Heading text1='Skontaktuj sięz nami'/>
                {data.status === 'success' &&
                    <p className='contact__success'>Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.</p>}
                <div className='contact__input-container'>
                    <Input type='text' placeholder='Krzysztof' label='Wpisz swoje imię' errorMessage={name.errorMessage}
                           value={name.value}
                           onSetValue={(value) => setName(prevState => ({...prevState, value: value}))}/>
                    <Input type='text' placeholder='abc@xyz.pl' label='Wpisz swój email'
                           errorMessage={email.errorMessage} value={email.value}
                           onSetValue={(value) => setEmail(prevState => ({...prevState, value: value}))}/>
                </div>
                <Input textarea={true} errorMessage={message.errorMessage} value={message.value}
                       onSetValue={(value) => setMessage(prevState => ({...prevState, value: value}))}
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