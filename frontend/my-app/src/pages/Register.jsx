import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Register.css"

function Register(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/user/post", {
          name: name,
          email: email,
          password: password,
          });
          alert("User Registation Successfully");
          navigate('/login');
        } catch (err) {
          alert(err);
        }
      }
    

    return(
        <>
        <div className="contents">
            <div className="content">
                <h1>Register</h1>
                <div>
                    <input className="input" placeholder="name" type="text"
                    value={name} onChange={(event) =>{setName(event.target.value);}}/>
                </div>
                <div>
                    <input className="input" placeholder="Username" type="email"
                    value={email} onChange={(event) =>{setEmail(event.target.value);}}/>
                </div>
                <div>
                    <input className="input" placeholder="Password" type="password"
                    value={password} onChange={(event) => {setPassword(event.target.value);}}/>
                </div>  
                <button onClick={save} type="submit">Register</button>
                <p>Forgot Username or Password?</p>
            </div>
        </div>
        </>
    )
} export default Register