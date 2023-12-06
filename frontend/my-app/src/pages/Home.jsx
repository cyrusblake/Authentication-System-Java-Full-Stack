import React, { useState, useEffect } from "react";
import '../styles/Home.css'

function Home(){


    const[cash, setCash] = useState(null)
    const [loading, setLoading] = useState(true)

    const id = '5'

    useEffect(() => {
        fetch(`http://localhost:8080/user/cash/${id}`)
            .then(res => res.json())
            .then(result => {
                // Check if result is a number before updating state
                if (typeof result === 'number') {
                    setCash(result);
                    setLoading(false); // Set loading to false when data is received
                } else {
                    console.error("API response is not a number:", result);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [])

    return(
        <>
        <div className="contents">
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <h1>${cash}</h1>
                )}
            </div>
            <button className="hb">Request</button>
            <button className="hb">Pay</button>
        </div>
        </>
    )
} export default Home