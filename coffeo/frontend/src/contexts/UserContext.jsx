import React, {createContext, useEffect, useState} from 'react';

export const UserContext = createContext();

function getInitialState() {
  const user = localStorage.getItem('username');
  return user ? user : null
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(getInitialState);

    useEffect(() => {
        if (user !== null) {
            localStorage.setItem('username', user);
            console.log(`Set user to ${user}`)
        } else {
            localStorage.removeItem('username');

        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
