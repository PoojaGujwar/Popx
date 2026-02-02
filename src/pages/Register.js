import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ name: "", email: "", number: "", password: "", company: "", agency: "" })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((preValue) => ({ ...preValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.password) {
            alert("Please fill are required fields")
            return
        }
        localStorage.setItem("UserData", JSON.stringify(formData))
        navigate("/profile")
    }
    return (
        <div className="mobile-wrapper">
            <h2>Create your PopX account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name*</label>
                    <input className="input" type="text" placeholder="Enter name" name="name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email*</label>
                    <input className="input" type="email" placeholder="Enter your email" name="email" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Number*</label>
                    <input className="input" type="number" placeholder="Enter 10 digit number" name="number" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password*</label>
                    <input className="input" type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Company name*</label>
                    <input className="input" type="text" placeholder="Company name" name="company" onChange={handleChange} />
                </div>
                <section className="" style={{ marginTop: "12px", marginBottom: "12px" }}>
                    <label>Are you an Agency? </label><br />
                    <input type="radio" name="agency" value="Yes" style={{ marginTop: "12px", padding: "10px" }} onChange={handleChange} /> Yes
                    <input type="radio" name="agency" value="No" style={{ marginTop: "12px", padding: "10px" }} onChange={handleChange} /> No
                </section>
                <button className="btn primary-btn" onClick={() => navigate("/profile")}>Create Account</button>
            </form>

        </div>
    )
}