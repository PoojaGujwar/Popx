import { useEffect, useState } from "react";
import "../styles/Profile.css"

export default function Profile() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const storedData = localStorage.getItem("UserData")
    if (storedData) {
      setUser(JSON.parse(storedData))
    }
  }, [])
  console.log(user)
  console.log(localStorage.getItem("email"))
  return (
    <div className="mobile-wrapper">
      <h2 className="title">Account Settings</h2>
      {user && (
        <div className="profile_box">
          <div className="top_section">
            <div className="avatar_img">
    
                <img
                  src="https://i.pravatar.cc/100"
                  alt="profile"
                  className="profile-img"
                />
                <input type="file" hidden id="upload" />
<div className="camera-icon" onClick={()=>document.getElementById("upload").click()}>
  📷
</div>
            </div>
            <div>
              <h4>{user.name}</h4>
              <p className="email">{user.email}</p>
            </div>
          </div>

          <p className="bio">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      )}
    </div>
  )

}
