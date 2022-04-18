import React from 'react';

const Blog = () => {
    return (
        <div >
            <h1>This is Blog section</h1>
            <h3>Question1 : Difference between authorization and authentication?</h3>
            <h4>{`Authentication:
                1.Authentication verifies who is the user.
                2.Authentication is the first step of varifications.
                3.Authentication needs password,one time pins and other information.`}</h4>
            <h4>{`Authorization:
                1.Authorization are verifies which user or resource are want to access.
                2.Authorization are implemented and maintained by the organization.`}</h4>
        </div>
    );
};

export default Blog;