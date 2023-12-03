import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css"

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/user/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message == "Login Success")
             { 
                
                navigate('/home');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
            }, fail => {
                console.error(fail); // Error!
            });
        }
 
         catch (err) {
          alert(err);
        }
      
      }

    

    return(
        <>
        <div className="contents">
            <div className="content">
                <h1>Log in</h1>
                <div>
                    <input className="input" placeholder="Username" type="email"
                    value={email} onChange={(event) =>{setEmail(event.target.value);}}/>
                </div>
                <div>
                    <input className="input" placeholder="Password" type="password"
                    value={password} onChange={(event) => {setPassword(event.target.value);}}/>
                </div>  
                <button onClick={login} type="submit">Log in</button>
                <p>Don't Have An Account</p>
            </div>
        </div>
        </>
    )
} export default Login