import React, {useState} from 'react';
import Heading from "./Heading.jsx";
import Input from "./Input/Input.jsx";
import {NavLink} from "react-router-dom";
import {validateEmail, validatePassword} from "../validation.js";

const Login = () => {

    const [values, setValues] = useState({email: '', password: ''});
    const [errorMessages, setErrorMessages] = useState({email: '', password: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        setErrorMessages({email: '', password: ''});

        if (validateEmail(values.email)) {
            isValid = false;
            setErrorMessages(prevState => ({...prevState, email: 'Podany email jest nieprawidłowy'}))
        }
        if (validatePassword(values.password)) {
            isValid = false;
            setErrorMessages(prevState => ({...prevState, password: 'Podane hasło jest za krótkie'}))
        }

        if (isValid) {
            console.log('validation OK');
            setErrorMessages({email: '', password: ''});
        }
    }

    return (
        <div className="login">
            <Heading text1='Zaloguj się'/>
            <form noValidate onSubmit={handleSubmit} className='login__form'>
                <div className='login__input-container'>
                    <Input type='email' label='Email' errorMessage={errorMessages.email}
                           value={values.email}
                           onSetValue={(value) => setValues(prevState => ({...prevState, email: value}))}/>
                    <Input type='password' label='Hasło' errorMessage={errorMessages.password}
                           value={values.password}
                           onSetValue={(value) => setValues(prevState => ({...prevState, password: value}))}/>
                </div>
                <div className='login__button-container'>
                    <NavLink  className="button button--small"
                              to={"/rejestracja"}>Załóż konto</NavLink>
                    <button className='button button--border button--small'>Zaloguj się</button>
                </div>
            </form>
        </div>
    );
};

export default Login;