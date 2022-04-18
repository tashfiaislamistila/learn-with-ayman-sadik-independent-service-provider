import React from 'react';

const Blog = () => {
    return (
        <div >
            <h1>This is Blog section</h1>
            <div>
                <h3>Question1 : Difference between authorization and authentication?</h3>
                <h4><span>Answer:</span>{`Authentication:
                1.Authentication verifies who is the user.
                2.Authentication is the first step of varifications.
                3.Authentication needs password,one time pins and other information.
                4.Authentication is changeable by the user.`}</h4>
                <h4>{`Authorization:
                1.Authorization are verifies which user or resource are want to access.
                2.Authorization are implemented and maintained by the organization.
                3.Authorization is not changeable by the user.
                4.It is not visible by the user.`}</h4>
            </div>
            <div>
                <h1>Question 2: Why are you using firebase? What other options do you have to implement authentication?</h1>
                <h4><span>Answer:</span>{``
                }</h4>
            </div>
        </div>
    );
};

export default Blog;