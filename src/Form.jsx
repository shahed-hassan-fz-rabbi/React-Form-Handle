import React from 'react';
import { useState } from 'react';

const Form = () => {

const [email, setEmail] = useState("");

    return (
        <div>
            
            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}              
            
            />
            <input type="button" value="Submit" />

            <p>You entered: {email}</p>


        </div>
    );
};

export default Form;