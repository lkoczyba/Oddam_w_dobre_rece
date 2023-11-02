import React from 'react';

const Input = ({textarea = false, type = 'text', label = '', placeholder = '', errorMessage = '',value, onSetValue}) => {

    // const [value, setValue] = useState('');
    const handleChange = (e) => {
        if (typeof onSetValue === "function") onSetValue(e.target.value);
    };

    return (
        !textarea ? <label className='input__label'>{label}<input
                value={value} onChange={handleChange}
                className={`input__text ${errorMessage.length > 0 && 'input__text--error'}`} type={type}
                placeholder={placeholder}/>
                {errorMessage.length > 0 && <p className='input__error'>{errorMessage}</p>}
            </label> :
            <label
                className={`input__label ${errorMessage.length > 0 && 'input__label--error'}`}>{label}<textarea
                value={value} onChange={handleChange}
                className={`input__textarea ${errorMessage.length > 0 && 'input__textarea--error'}`}
                placeholder={placeholder}/>
                {errorMessage.length > 0 && <p className='input__error'>{errorMessage}</p>}
            </label>
    )
};
export default Input;