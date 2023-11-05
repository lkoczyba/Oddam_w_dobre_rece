import React from 'react';

const Radio = ({label, name,}) => {
    return (
        <label className='radio__label'>
        <input className='radio' name={name} type="radio"/>
            {label}
        </label>
    );
};

export default Radio;