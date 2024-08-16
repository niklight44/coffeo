import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import '../styles/Form.css'; // Ensure you have this file for styling

const RegisterForm = () => {
    const { setUser } = useContext(UserContext);
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const serverURL = process.env.REACT_APP_SERVER_URL;


    const handleRegister = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        try {
            const response = await fetch(`${serverURL}/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registerData),
            });
            if (response.ok) {
                const data = await response.json();
                setUser({ username: data.username });
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Registration failed');
            }
        } catch (error) {
            setError('An error occurred');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            />
            <button type="submit">Register</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default RegisterForm;
