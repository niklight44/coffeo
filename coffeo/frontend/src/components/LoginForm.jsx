import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { getCSRFToken } from '../services/csrfService';
import '../styles/Form.css';

const LoginForm = () => {
    const { setUser } = useContext(UserContext);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [csrfToken, setCsrfToken] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCSRFToken = async () => {
            const token = await getCSRFToken();
            setCsrfToken(token);
        };
        fetchCSRFToken();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify(loginData),
                credentials: 'include', // Ensure cookies are included in the request
            });
            if (response.ok) {
                const data = await response.json();
                setUser({ username: data.username });
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
            }
        } catch (error) {
            setError(`An error occurred: ${error}`);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button type="submit">Login</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default LoginForm;
