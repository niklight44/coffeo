export const getCSRFToken = async () => {
    const serverURL = import.meta.env.VITE_SERVER_URL;
    let csrfTokenURL = `${serverURL}/api/get-csrf-token`;
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
