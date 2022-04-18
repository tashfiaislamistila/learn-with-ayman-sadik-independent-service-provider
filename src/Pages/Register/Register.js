import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;

        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div className='register-form'>
            <h2 className='text-register'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Your Email' required />

                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input className='w-50 mx-auto btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='mt-4'>Already have an Account?
                <Link to='/login' className='text-danger mx-2 pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;