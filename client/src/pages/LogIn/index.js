import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import "./style.css";
import API from "../../utils/API";

export default function Login() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [container, setContainer] = useState("container");
  const [userData, setUserData] = useState({});

  const handleNameChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSignupForm = (event) => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    console.log({ email: email, password: password, username: name });
    API.signup({ email: email, password: password, username: name })
      .then((res) => {
        if (res.data.token) {
          window.location.href = "/home";
        }
      })
      .catch((err) => console.log(err));
  };
  const handleLoginForm = (event) => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.login({ email: email, password: password })
      .then((res) => {
        if (res.data.token) {
          console.log(res.data.token);
          window.location.href = "/home";
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div class={container} id="container">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="# " class="social">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="# " class="social">
                <i class="fa fa-google"></i>
              </a>
              <a href="# " class="social">
                <i class="fa fa-linkedin"></i>
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
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="# " class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="# " class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="# " class="social">
                <i class="fab fa-linkedin-in"></i>
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
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                class="ghost"
                onClick={() => setContainer("container ")}
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Adam, Matt, Eric, and Pavel!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                class="ghost"
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
