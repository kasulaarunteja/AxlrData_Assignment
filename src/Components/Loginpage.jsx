import React from "react";
import "./Login.css"
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Loginpage = ()=>{

  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

if (login) {
  navigate("/Categories");
}

const [user, setUser] = useState({
  email: "",
  password: "",
});

const handleChange = (e) => {
  setUser({
    ...user,
    [e.target.id]: e.target.value,
  });
};

const handleClick = (e) => {
  e.preventDefault();
  setLogin(false);
  axios
    .post("https://api.earthsfresh.in/api/users/userLogin", user)
    .then((res) => {
     // console.log(res);
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setLogin(true);
      alert("login successful");
    })
    .catch((err) => {
      console.log(err);
    });
};

    return(
      <div>
      <div className="Login">
        <div className="form_container1">
          <h2>Login</h2>
          <form onSubmit={handleClick} className="form1">
            <label className="label" id="lab">
              Email
            </label>
            <br />
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={user.user_email}
              onChange={handleChange}
            />
            <br />
            <label className="label" id="lab">
              Password
            </label>
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              value={user.user_password}
              onChange={handleChange}
            />
            <button
              className="subbtnss"
              type="submit"
              onClick={handleClick}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Loginpage