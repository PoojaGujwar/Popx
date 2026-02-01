import { Link } from "react-router-dom";

export default function Login(){
    return(
        <div className="mobile-wrapper">
            <h2>Login</h2>
            <input className="input" type="text" placeholder="Enter register email"/>
            <input className="input" type="password" placeholder="Enter password"/>
            <button className="btn primary-btn">Login</button>
        </div>
    )
}