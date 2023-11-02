import React, {useState} from 'react';
import Heading from "./Heading.jsx";
import Input from "./Input/Input.jsx";
import {NavLink} from "react-router-dom";
import {validateEmail, validatePassword, validatePasswordConfirm} from "../validation.js";

const Register = () => {
    const [values, setValues] = useState({email: '', password: '', password2: ''});
    const [errorMessages, setErrorMessages] = useState({email: '', password: '', password2: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        setErrorMessages({email: '', password: '', password2: ''});

        if (validateEmail(values.email)) {
            isValid = false;
            setErrorMessages(prevState => ({...prevState, email: 'Podany email jest nieprawidłowy'}))
        }
        if (validatePassword(values.password)) {
            isValid = false;
            setErrorMessages(prevState => ({...prevState, password: 'Podane hasło jest za krótkie'}))
        }
        if (validatePasswordConfirm(values.password, values.password2)) {
            isValid = false;
            setErrorMessages(prevState => ({...prevState, password2: 'Hasła muszą być takie same'}))
        }
        if (validatePassword(values.password2)) {
            isValid = false;
            setErrorMessages(prevState => ({...prevState, password2: 'Podane hasło jest za krótkie'}))
        }


        if (isValid) {
            console.log('validation OK');
            setErrorMessages({email: '', password: '', password2: ''});
        }
    }


    return (
        <div className='register'>
            <Heading text1='Załóż konto'/>
            <form noValidate onSubmit={handleSubmit} className='register__form'>
                <div className='register__input-container'>
                    <Input type='email' label='Email' errorMessage={errorMessages.email}
                           value={values.email}
                           onSetValue={(value) => setValues(prevState => ({...prevState, email: value}))}/>
                    <Input type='password' label='Hasło' errorMessage={errorMessages.password}
                           value={values.password}
                           onSetValue={(value) => setValues(prevState => ({...prevState, password: value}))}/>
                    <Input type='password' label='Hasło' errorMessage={errorMessages.password2}
                           value={values.password2}
                           onSetValue={(value) => setValues(prevState => ({...prevState, password2: value}))}/>
                </div>
                <div className='login__button-container'>
                    <NavLink className="button button--small"
                             to={"/logowanie"}>Zaloguj się</NavLink>
                    <button className='button button--border button--small'>Załóż konto</button>
                </div>
            </form>
        </div>
    );
};

export default Register;