import React from 'react';

const StepCard = ({iconURL, title, text}) => {
    return (
        <div className='step-card'>
            <img className='step-card__icon' src={iconURL} alt="icon"/>
            <h2 className='step-card__title'>{title}</h2>
            <span className='step-card__line'></span>
            <p className='step-card__text'>{text}</p>
        </div>
    );
};

export default StepCard;