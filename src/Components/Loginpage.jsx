import React from "react";
import "./Login.css"


const Loginpage = ()=>{
    return(
        <div className="login">
          <h2>Login</h2>
          <label>E-Mail ID</label>
          <input type="email" id="email" name="email"></input>
        </div>
    )
}

export default Loginpage