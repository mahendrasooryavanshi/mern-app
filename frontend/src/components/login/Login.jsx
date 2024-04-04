import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { _userUrl } from "../../Baseurl/base.url";
import CryptoJS from "crypto-js";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { email, password };
    try {
      let result = await axios.post(_userUrl + "/login", userData);
      if ("error" in result.data) {
        const message = result.data.message;
        setError(message);
      }
      localStorage.setItem("token", result.data.token.accessToken);
      var ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(result.data),
        "secret key 123"
      ).toString();
      console.log(ciphertext, "+ciphertext");
      localStorage.setItem("auth", ciphertext);
      navigate("/dashboard");
      toast("login success", {
        type: "success",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
    // TODO: Submit the form data to your backend here using axios
  };
  return (
    <div
      className="form"
      style={{
        height: 350,
        marginTop: "75px",
        padding: "15px",
        alignContent: "center",
        background: "#3333",
        borderRadius: "20px",
        borderColor: "wheat",
      }}
    >
      {errorMessage ? (
        <span style={{ color: "red" }}> {"*" + errorMessage}</span>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-body">
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
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div class="footer">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
}
