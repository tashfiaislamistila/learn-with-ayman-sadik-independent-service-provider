import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div >
            <h1 className='text-center mt-4'>Package Details</h1>
            <div className='text-center mt-4 row justify-content-center'>
                <div className='px-2 col col-md-6 col-lg-3'>
                    <Card className='border border-primary' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className='text-primary fs-1 '>Intro</Card.Title>
                            <h4> Save 20%</h4>
                            <ListGroup>
                                <ListGroup.Item>☑ Booking</ListGroup.Item>
                                <ListGroup.Item>☑ Own Cover Image</ListGroup.Item>
                                <ListGroup.Item>☑ Multiple Categories </ListGroup.Item>
                                <ListGroup.Item disabled>☑ Apply for job</ListGroup.Item>
                                <ListGroup.Item disabled>☑ Job Alerts</ListGroup.Item>
                                <ListGroup.Item disabled>☑ Google Calender</ListGroup.Item>
                                <ListGroup.Item disabled>☑ Crop Profit Image</ListGroup.Item>
                            </ListGroup>
                            <Card.Title>$29/month</Card.Title>
                            <Link to="/checkout">
                                <button className='btn btn-primary'>Proceed Checkout</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='px-2 col col-md-6 col-lg-3'>
                    <Card className='border border-primary' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className='text-primary fs-1'>Base</Card.Title>
                            <h4> Save 20%</h4>
                            <ListGroup>
                                <ListGroup.Item>☑ Booking</ListGroup.Item>
                                <ListGroup.Item>☑ Own Cover Image</ListGroup.Item>
                                <ListGroup.Item>☑ Multiple Categories </ListGroup.Item>
                                <ListGroup.Item>☑ Apply for job</ListGroup.Item>
                                <ListGroup.Item >☑ Job Alerts</ListGroup.Item>
                                <ListGroup.Item disabled>☑ Google Calender</ListGroup.Item>
                                <ListGroup.Item disabled>☑ Crop Profit Image</ListGroup.Item>
                            </ListGroup>
                            <Card.Title>$39/month</Card.Title>
                            <Link to="/checkout">
                                <button className='btn btn-primary'>Proceed Checkout</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='px-2 col col-md-6 col-lg-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='bg-primary'>
                            <Card.Title className='text-white fs-1'>Pro</Card.Title>
                            <h4 className='text-white'> Save 20%</h4>
                            <ListGroup>
                                <ListGroup.Item>☑ Booking</ListGroup.Item>
                                <ListGroup.Item>☑ Own Cover Image</ListGroup.Item>
                                <ListGroup.Item>☑ Multiple Categories </ListGroup.Item>
                                <ListGroup.Item>☑ Apply for job</ListGroup.Item>
                                <ListGroup.Item>☑ Job Alerts</ListGroup.Item>
                                <ListGroup.Item>☑ Google Calender</ListGroup.Item>
                                <ListGroup.Item>☑ Crop Profit Image</ListGroup.Item>
                            </ListGroup>
                            <Card.Title className='text-white'>$49/month</Card.Title>
                            <Link to="/checkout">
                                <button className='btn btn-light'>Proceed Checkout</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='px-2 col col-md-6 col-lg-3'>
                    <Card className='border border-primary' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className='text-primary fs-1'>Enterprise</Card.Title>
                            <h4> Save 20%</h4>
                            <ListGroup>
                                <ListGroup.Item>☑ Booking</ListGroup.Item>
                                <ListGroup.Item>☑ Own Cover Image</ListGroup.Item>
                                <ListGroup.Item>☑ Multiple Categories </ListGroup.Item>
                                <ListGroup.Item>☑ Apply for job</ListGroup.Item>
                                <ListGroup.Item>☑ Job Alerts</ListGroup.Item>
                                <ListGroup.Item>☑ Google Calender</ListGroup.Item>
                                <ListGroup.Item>☑ Crop Profit Image</ListGroup.Item>
                            </ListGroup>
                            <Card.Title>$89/month</Card.Title>
                            <Link to="/checkout">
                                <button className='btn btn-primary'>Proceed Checkout</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                {/* <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link> */}
            </div>
        </div>
    );
};

export default ServiceDetail;