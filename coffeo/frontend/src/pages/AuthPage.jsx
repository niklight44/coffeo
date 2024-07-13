import React from 'react';
import "../styles/AuthPage.css";
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage = () => {
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
