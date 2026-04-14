import React from 'react';
import UseInput from './UseInput';

const UserForm = () => {

    const name = UseInput("");



    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(name.value);

        name.reset();
    }

    return (
       <form onSubmit={handleSubmit}>

        <h2>Custom hoookkkkk a  Form</h2>

            <input type="text" 
            
            placeholder='Enter your name'
            {...name}
            />
            <button type="submit">Submit</button>
            <p>Name: {name.value}</p>


       </form>
    );
};

export default UserForm;