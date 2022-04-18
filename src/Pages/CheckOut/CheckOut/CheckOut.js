import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {
    const emailRef = useRef('');
    const nameRef = useRef('');
    const addressRef = useRef('');
    const phoneRef = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        if (email && name && address && phone) {
            toast('Thank you for the booking');
        }

    }
    return (
        <div>
            <div className='container w-50 mx-auto'>
                <h2 className='text-center mt-2'>Please checkout your booking</h2>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control ref={addressRef} type="text" placeholder="Enter address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control ref={phoneRef} type="text" placeholder="Enter phone number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Button
                        onClick={handleSubmit}
                        variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
            <ToastContainer />
        </div>
    );
};


export default CheckOut;