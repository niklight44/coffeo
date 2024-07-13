export const getCSRFToken = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/get-csrf-token', {
            method: 'GET',
            credentials: 'include', // Ensure cookies are included in the request
        });
        const data = await response.json();
        return data.csrfToken;
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
        return null;
    }
};
