import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-5'>
            <p><small>Copyright @ {(new Date().getFullYear())} | Theme. All Rights Reserved </small></p>
        </footer>
    );
};

export default Footer;