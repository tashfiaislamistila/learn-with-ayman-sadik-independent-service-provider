import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center'>
            <p><small>Copyright @ {(new Date().getFullYear())} | Theme. All Rights Reserved </small></p>
        </footer>
    );
};

export default Footer;