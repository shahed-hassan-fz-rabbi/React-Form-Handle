import React, { useState } from 'react';

const UseInput = ( defaultValue = "" ) => {

    const [value, setValue] = useState(defaultValue);

    const handlechange = (e) => {
        setValue(e.target.value);
    };

    const reset = () => setValue("");

    return {
        value,
        onChange : handlechange,
        reset,

    };
        
};

export default UseInput;