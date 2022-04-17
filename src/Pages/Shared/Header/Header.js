import React from 'react';
import { Link } from "react-router-dom";
import CustomLink from '../../CustomLink/CustomLink';
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <CustomLink className="navbar-brand text-uppercase fs-1" to="/">Tutor Ayman Sadik</CustomLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item fs-3">
                                <CustomLink className="nav-link " aria-current="page" to="/home">Home</CustomLink>
                            </li>
                            <li className="nav-item fs-3 ">
                                <CustomLink className="nav-link" to="/blog">Blog</CustomLink>
                            </li>
                            <li className="nav-item fs-3">
                                <CustomLink className="nav-link" to="/about">About</CustomLink>
                            </li>
                            <li className="nav-item fs-3">
                                <CustomLink className="nav-link" to="/review">Reviews</CustomLink>
                            </li>
                        </ul>
                        <span className="navbar-text fs-3">
                            <CustomLink className="nav-link" to="/login">Login</CustomLink>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;