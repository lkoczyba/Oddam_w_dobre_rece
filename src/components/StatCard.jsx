import React from 'react';

const StatCard = ({number, title, text}) => {
    return (
        <div className='stat-card'>
            <strong className='stat-card__number'>{number}</strong>
            <h2 className='stat-card__title'>{title}</h2>
            <p className='stat-card__text'>{text}</p>
        </div>
    );
};

export default StatCard;