import React from 'react';

const FormHeader = ({title, text}) => {
    return (
        <div className='form-header'>
            <h3 className='form-header__title'>{title}</h3>
            <p className='form-header__text'>{text}</p>
        </div>
    );
};

export default FormHeader;