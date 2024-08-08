import {Link} from "react-router-dom";
import React from "react";


const LoginButton = ({user}) => {

    return(
        <>
            {user ? (<span className="auth-button">Hello, {user}</span>) : (
                    <Link to="/auth" className="auth-button">Log in/Sign up</Link>
            )}
        </>

    )
}

export default LoginButton;