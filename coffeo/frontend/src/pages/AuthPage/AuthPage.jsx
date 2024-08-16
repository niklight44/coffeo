import React, {useContext, useEffect} from 'react';
import "./AuthPage.css";
import LoginForm from '../../components/LoginForm.jsx';
import RegisterForm from '../../components/RegisterForm.jsx';
import {UserContext} from "../../contexts/UserContext.jsx";

const AuthPage = () => {
    let isUserLoggedIn = useContext(UserContext);

    useEffect(() => {
        if (isUserLoggedIn) {
            console.log('Redirecting User to main page');
            window.location.href = "/";
        }
    })

    return (
        <>
            <h1>AuthPage</h1>
            <div className="auth-section">
                <div className="login-section">
                    <h2>Login</h2>
                    <LoginForm />
                </div>
                <div className="registration-section">
                    <h2>Registration</h2>
                    <RegisterForm />
                </div>
            </div>
        </>
    );
};

export default AuthPage;
