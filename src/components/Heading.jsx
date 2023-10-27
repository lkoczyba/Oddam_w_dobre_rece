import React from 'react';

const Heading = ({text1, text2}) => {
    return (
        <div className='heading'>
            {text1 && <h1 className='heading__text'>{text1}</h1>}
            {text2 && <h1 className='heading__text'>{text2}</h1>}
            <img src="src/assets/Decoration.svg" alt="decoration"/>
        </div>
    );
};

export default Heading;