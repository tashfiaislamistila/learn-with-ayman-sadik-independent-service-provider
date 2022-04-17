import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Your Email' required />

                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;