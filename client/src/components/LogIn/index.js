import React, { useState } from "react";
import API from "../../utils/API";
import DemoAccountInfoCard from "./DemoAccountInfoCard";
import Main from "../Main";
import "./style.css";
import DropDownSecurityQuestions from "../DropDownSecurityQuestions";
import ForgotPassword from "../ForgotPassword";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [token, setToken] = useState(null);
  const [securityCheck, setSecurityCheck] = useState(null);
  function accessHomePage(tokenId) {
    if (tokenId) {
      return <Main removeToken={removeToken} />;
    }
    return (
      <main
        className="cont"
        style={{
          backgroundImage: `url(${require("../../images/everest.jpg")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "auto",
          height: "100%",
        }}
      >
        <div className="login-wrap">
          <div className="login-html">
            <h1 className="title" style={{ color: "whitesmoke" }}>
              WELCOME TO EVEREST
            </h1>
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user1" className="label">
                    Email
                  </label>
                  <input
                    id="user1"
                    type="text"
                    className="input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass4" className="label">
                    Password
                  </label>
                  <input
                    id="pass4"
                    type="password"
                    className="input"
                    data-type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="group">
                  <input
                    id="check"
                    type="checkbox"
                    className="check"
                    defaultChecked
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="Sign In"
                    onClick={(e) => handleSigninForm(e)}
                  />
                </div>
                <div className="hr"></div>
                <ForgotPassword />
				<div className="hr"></div>
			  	<DemoAccountInfoCard />
              </div>
			  
			  
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="name" className="label">
                    Full Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="label">
                    Email*
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password*
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass2" className="label">
                    Repeat Password*
                  </label>
                  <input
                    id="pass2"
                    type="password"
                    className="input"
                    data-type="password"
                    onChange={(e) => setRepeatedPassword(e.target.value)}
                  />
                </div>
                <DropDownSecurityQuestions
                  handleSetSecQuestion={handleSetSecQuestion}
                />
                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="Sign Up"
                    onClick={(e) => handleSignupForm(e)}
                  />
                </div>

                <div className="foot-lnk"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  function handleSetSecQuestion(data) {
    setSecurityCheck(data);
  }
  const handleSignupForm = (event) => {
    event.preventDefault();
    if (!name) {
      alert("Don't forget to insert the Full name");
    } else if (!email) {
      alert("Don't forget the email");
    } else if (password.length < 6 || repeatedPassword.length < 6) {
      alert("Your password should contain at least 6 characters");
    } else if (password !== repeatedPassword) {
      alert("Passwords don't match");
    } else if (!securityCheck) {
      alert("You should set security question!");
    } else if (password === repeatedPassword) {
      API.signup({
        email: email,
        password: password,
        username: name,
        question: securityCheck.question,
        answer: securityCheck.answer,
      })
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.user);
            localStorage.setItem("activeAction", res.data.activeAction);
            setToken(res.data.token);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("activeAction");
    setToken("");
  };

  const handleSigninForm = (event) => {
    event.preventDefault();
    API.login({ email: email, password: password })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.user);
          localStorage.setItem("activeAction", res.data.activeAction);
          setToken(res.data.token);
        }
      })
      .catch((err) => console.log(err));
  };

  //login to the user home page function
  return accessHomePage(token);
}
