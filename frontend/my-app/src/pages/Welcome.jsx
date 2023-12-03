import React from "react";
import { Link } from 'react-router-dom'

function Welcome(){
    return(
        <>
        <div className="contents">
            <h1>Welcome</h1>
            <div>
                <Link to='/register'><button>Get started</button></Link>
                 
            </div>
            <div>
                <Link to='/login'><button>Log in</button></Link>
            </div>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
        </>
    )
} export default Welcome