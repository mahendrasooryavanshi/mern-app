import "./register.css";
import React, { useState, useEffect } from "react";
import { _userUrl } from "../../Baseurl/base.url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export default function Register() {
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      mobile,
      password,
      confirmPassword,
    };
    try {
      let result = await axios.post(_userUrl + "/signup", userData);
      console.log(result.data);
      if ("error" in result.data) {
        setError(result.data.message);
      } else {
        setError("");
      }
    } catch (error) {
      console.log(error, "_________error message");
    }

    // console.log("result", result);
    // TODO: Submit the form data to your backend here using axios
  };

  return (
    <div className="register">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-body">
            {error ? <p style={{ color: "red" }}>{"*" + error}</p> : ""}
            <div className="username">
              <ToastContainer />
              <label className="form__label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="form__input"
                type="text"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFName(e.target.value)}
                required
              />
            </div>
            <div className="lastname">
              <label className="form__label" htmlFor="lastName">
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                className="form__input"
                placeholder="LastName"
                value={lastName}
                onChange={(e) => setLName(e.target.value)}
                required
              />
            </div>
            <div className="email">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="password">
              <label className="form__label" htmlFor="tel">
                Mobile
              </label>
              <input
                className="form__input"
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="password">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                className="form__input"
                type="new password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="form__input"
                type="new password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setCPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="footer">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
