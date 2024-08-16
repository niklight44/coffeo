export const getCSRFToken = async () => {
    let csrfTokenURL = 'http://91.142.74.252:8000/api/get-csrf-token';
    try {
        const response = await fetch(csrfTokenURL, {
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
