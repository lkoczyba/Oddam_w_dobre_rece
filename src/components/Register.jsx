import React, {useState} from 'react';
import Heading from "./Heading.jsx";
import Input from "./Input/Input.jsx";
import {NavLink} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState({value: "", errorMessage: ''});
    const [password, setPassword] = useState({value: "", errorMessage: ''});
    const [passwordConfirm, setPasswordConfirm] = useState({value: "", errorMessage: ''});

    return (
        <div className='register'>
            <Heading text1='Załóż konto'/>
            <form className='login__form'>
                <Input type='text' label='Email' errorMessage={name.errorMessage}
                       value={email.value}
                       onSetValue={(value) => setEmail(prevState => ({...prevState, value: value}))}/>
                <Input type='password' label='Hasło' errorMessage={name.errorMessage}
                       value={password.value}
                       onSetValue={(value) => setPassword(prevState => ({...prevState, value: value}))}/>
                <Input type='passwordConfirm' label='Powtórz hasło' errorMessage={name.errorMessage}
                       value={passwordConfirm.value}
                       onSetValue={(value) => setPasswordConfirm(prevState => ({...prevState, value: value}))}/>
            </form>
            <div className='login__button-container'>
                <NavLink className="button button--small"
                         to={"/logowanie"}>Zaloguj się</NavLink>
                <button className='button button--border button--small'>Załóż konto</button>
            </div>
        </div>
    );
};

export default Register;