import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import ProjectManager from "../ProjectManager";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [container, setContainer] = useState("container");
  const [token, setToken] = useState("");

  function accessHomePage(token) {
    if (token) {
      return <ProjectManager token={token} />;
    }
    return (
      <div>
        <div className={container} id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="# " className="social">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="# " className="social">
                  <i className="fa fa-google"></i>
                </a>
                <a href="# " className="social">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleNameChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handlePasswordChange}
              />
              <button onClick={handleSignupForm}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="# " className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="# " className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="# " className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>

              <input
                type="email"
                placeholder="Email"
                onChange={handleEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
              <a href="#">Forgot your password?</a>
              <button onClick={handleLoginForm}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  onClick={() => setContainer("container ")}
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Adam, Matt, Eric, and Pavel!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className="ghost"
                  onClick={() => setContainer("container right-panel-active")}
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignupForm = (event) => {
    event.preventDefault();
    console.log({ email: email, password: password, username: name });
    API.signup({ email: email, password: password, username: name })
      .then((res) => {
        if (res.data.token) {
          console.log(res.data);
          setToken(res.data.token);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLoginForm = (event) => {
    event.preventDefault();
    API.login({ email: email, password: password })
      .then((res) => {
        if (res.data.token) {
          console.log(res.data);
          setToken(res.data.token);
        }
      })
      .catch((err) => console.log(err));
  };

  //login to the user home page function
  return accessHomePage(token);
}
