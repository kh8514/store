import React from 'react';
import {Link} from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <h1> Oops!</h1>
            <div>We can`t find that page.</div>
            <div>
                <Link to="/">
                    Return Home
                </Link>
            </div>
        </>
    )
}

export default Error404