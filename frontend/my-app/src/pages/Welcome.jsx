import React from "react";
import { Link } from 'react-router-dom'
import '../styles/Welcome.css'

function Welcome(){
    return(
        <>
        <div className="contents">
            <h1>Welcome</h1>
            <div>
                <Link to='/register'><button className="wb">Get started</button></Link>
            </div>
            <div>
                <Link to='/login'><button className="wb">Log in</button></Link>
            </div>
            <p className="p">Terms & Conditions</p>
            <p className="p">Privacy Policy</p>
        </div>
        </>
    )
} export default Welcome