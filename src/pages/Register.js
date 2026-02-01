export default function Register(){
    return(
        <div className="mobile-wrapper">
         <h2>Create your PopX account</h2>
        <form>
            <input className="input" type="text" placeholder="Name"/>
            <input className="input" type="email" placeholder="Enter your email"/>
            <input className="input" type="number" placeholder="Enter 10 digit number"/>
            <input  className="input" type="password" placeholder="Enter your password"/>
            <input className="input"  type="text" placeholder="Company name"/>
            <label>Are you an Agency? </label><br/>
            <input type="radio" /> Yes<br/>
            <input type="radio"/> No
            <button  className="btn primary-btn "type="submit" disabled>Create Account</button>
        </form>
        </div>
    )
}