import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import '../styles/TheHeader.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import search_icon from '../assets/search_icon.png';
import { UserContext } from '../contexts/UserContext';

function TheHeader() {
    const { user } = useContext(UserContext);

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
                <Link to="/" className="logo-text">Coffeo</Link>
            </div>
            <nav>
                <Link to="/product">Product</Link>
                <Link to="/special-offers">Special Offers</Link>
                <Link to="/the-process">The process</Link>
                <Link to="/packing">Packing</Link>
                <Link to="/about">About</Link>
            </nav>
            <div className="header__buttons">
                <div className="search-button">
                    <img src={search_icon} alt="search" />
                </div>
                <div className="cart-button">
                    <img src={cart_icon} alt="cart" />
                </div>
                {user ? (
                    <span className="auth-button">Hello, {user.username}</span>
                ) : (
                    <Link to="/auth" className="auth-button">Log in/Sign up</Link>
                )}
            </div>
        </header>
    );
}

export default TheHeader;
