import { useNavigate } from "react-router-dom";
import "../styles/Landing.css"

export default function HomeLanding(){
    const navigate = useNavigate()
    return(
        <div className="mobile-wrapper" style={{alignContent:"flex-end"}}>
            <h2>Welcome to PopX</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button onClick={()=>navigate("/signup")} className="primary-btn btn">Create Account</button>
            <button onClick={()=>navigate("/login")} className="secondary-btn btn">Already Registered? Login</button>
        </div>
    )
}