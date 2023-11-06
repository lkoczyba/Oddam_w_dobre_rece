import React from 'react';
import FormHeader from "../FormHeader/FormHeader.jsx";

const DonateForm = ({importantMessage ='', title='', step=1, displaySteps=true, displayHeader=true, children}) => {
    return (
        <>
            {displayHeader && <FormHeader title='Ważne' text={importantMessage}/>}
            <div className='donate-form'>
                {displaySteps && <p className='donate-form__step'> Krok {step}/4</p>}
                {title !=='' && <h2 className='donate-form__title'>{title}</h2>}
                {children}
            </div>
        </>
    );
};

export default DonateForm;