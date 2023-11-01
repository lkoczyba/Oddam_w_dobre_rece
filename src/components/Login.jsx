import React, {useState} from 'react';
import Heading from "./Heading.jsx";
import Input from "./Input/Input.jsx";
import {NavLink} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState({value: "", errorMessage: ''});
    const [password, setPassword] = useState({value: "", errorMessage: ''});

    return (
        <div className="login">
            <Heading text1='Zaloguj się'/>
            <form className='login__form'>
                <Input type='text' label='Email' errorMessage={name.errorMessage}
                       value={email.value}
                       onSetValue={(value) => setEmail(prevState => ({...prevState, value: value}))}/>
                <Input type='password' label='Hasło' errorMessage={name.errorMessage}
                       value={password.value}
                       onSetValue={(value) => setPassword(prevState => ({...prevState, value: value}))}/>
            </form>
            <div className='login__button-container'>
                <NavLink  className="button button--small"
                          to={"/rejestracja"}>Załóż konto</NavLink>
                <button className='button button--border button--small'>Zaloguj się</button>
            </div>
        </div>
    );
};

export default Login;