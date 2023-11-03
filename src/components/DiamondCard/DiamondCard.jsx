import React from 'react';

const DiamondCard = ({number, text}) => {
    return (
        <div className='diamond-card'>
                <p className='diamond-card__number'>{number}</p>
                <p className='diamond-card__text'>{text}</p>
        </div>
    );
};

export default DiamondCard;