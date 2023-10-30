import React from 'react';

const Input = ({type, label, placeholder}) => {

    switch (type) {
        case "text":
            return <label className='input__label'>{label}<input className='input__text' type='text' placeholder={placeholder}/></label>;
        case "textarea":
            return <label className='input__label'>{label}<textarea className='input__textarea' placeholder={placeholder}/></label>;
        default:
            return null;
    }
};
export default Input;