import React from 'react';

const Checkbox = ({label, value}) => {
    return (
        <label className='checkbox'>{label}
            <input type="checkbox" value={value}/>
        </label>
    );
};

export default Checkbox;