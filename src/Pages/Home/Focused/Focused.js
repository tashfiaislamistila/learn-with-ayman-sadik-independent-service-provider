import React from 'react';
import { Button, Card } from 'react-bootstrap';
import tutoring from '../../../image/tutoring.png'
import assessment from '../../../image/assessment.png'
import homework from '../../../image/homework.png'

const Focused = () => {
    return (
        <div className='container'>
            <div className='text-center mt-4'>
                <h1 className='fw-bolder'>The best tutors focused</h1>
                <h1 className='fw-bolder'>on your success</h1>
                <Button className='mt-4' variant="outline-danger">CALL: (017)57000000</Button>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='px-4 col col-md-6 col-lg-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tutoring} />
                        <Card.Body>
                            <Card.Title>One to one tutoring</Card.Title>
                            <Card.Text>
                                Specialized Tutoring to Fit Your Needs.One-to-one instruction describes a student learning from and interacting with
                                a teacher individually, with instruction tailored to the student's own personal pace and learning needs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='px-4 col col-md-6 col-lg-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={assessment} />
                        <Card.Body>
                            <Card.Title>Assessment Technology</Card.Title>
                            <Card.Text>
                                One complete,research-based system providing of integrated curriculum,assessment,instructional effectiveness, communication,and reporting tools.Formative assessment is done as students are learning.as written on assignments, technology provides a variety of ways for teachers to provide it.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='px-4 col col-md-6 col-lg-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={homework} />
                        <Card.Body>
                            <Card.Title>Personalized Homework</Card.Title>
                            <Card.Text>
                                You can assign homework personalized for each student based on their performance on tests or quizzes.Students earn automatic credit for questions from objectives they mastered on the test or quiz.Only questions from objectives that the student did not master appear in the homework.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Focused;