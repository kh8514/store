import React from "react"
import { Link } from "react-router-dom"

const Error500 = () => {
    return (
        <>
            <h1>System Error</h1>
            <div>
                Something went wrong! Please try again later.
            </div>

            <div>image</div>
            <div>
                <Link to='/'>
                    Return Home
                </Link>
            </div>
        </>
    );
}

export default Error500