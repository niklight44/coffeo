import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './TheHeader.module.css';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import search_icon from '../../assets/search_icon.png';
import { UserContext } from '../../contexts/UserContext.jsx';
import CartIcon from "../CartIcon/CartIcon.jsx";
import LoginButton from "../LoginButton.jsx";

function TheHeader() {
    const { user } = useContext(UserContext);

    return (
        <header>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <Link to="/" className={styles.logo__text}>Coffeo</Link>
            </div>
            <nav>
                <Link to="/product">Product</Link>
                <Link to="/special-offers">Special Offers</Link>
                <Link to="/the-process">The process</Link>
                <Link to="/packing">Packing</Link>
                <Link to="/about">About</Link>
            </nav>
            <div className={styles.header__buttons}>
                <Link to="shop">
                    <img src={search_icon} alt="search" />
                </Link>
                <CartIcon/>
                <LoginButton user={user}/>
            </div>
        </header>
    );
}

export default TheHeader;
