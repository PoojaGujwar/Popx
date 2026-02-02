import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin =async()=>{
        if(!email.includes("@")){
            alert("Enter valid email")
        }
        if(password.length < 4){
            alert("Password to short")
            return
        }
        localStorage.setItem("email",email)
        navigate("/profile")
    }

    return(
        <div className="mobile-wrapper">
            <h2>Signin to your PopX account</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="form-group">
            <label>Email Address</label>
            <input className="input" type="text" placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)} value={email}/> 
            </div>
            <div className="form-group">
            <label>Password</label>
            <input className="input" type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button className={`btn primary-btn ${email && password? "active":""}`} disabled={!email ||!password}
            onClick={handleLogin}>
                Login</button>
            </div>

        </div>
    )
}