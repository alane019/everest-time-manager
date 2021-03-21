import React, { useState } from "react";
import API from "../../utils/API";
// import ProjectManager from "../ProjectManager";
import Main from "../Main";
import "./style.css";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [container, setContainer] = useState("container");
  const [token, setToken] = useState("");

  function accessHomePage(token) {
    if (token) {
      return <Main />;
    }
    return (
      <div className="login-wrap">
        <div className="login-html">
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
                <label htmlFor="user" className="label">
                  Email
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
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
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Full Name
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
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
                <label htmlFor="pass" className="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => setRepeatedPassword(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
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
    );
  }

  const handleSignupForm = (event) => {
    event.preventDefault();
    console.log({ email: email, password: password, username: name });
    API.signup({ email: email, password: password, username: name })
      .then((res) => {
        if (res.data.token) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.user);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSigninForm = (event) => {
    event.preventDefault();
    API.login({ email: email, password: password })
      .then((res) => {
        if (res.data.token) {
          console.log(res.data);
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.user);
        }
      })
      .catch((err) => console.log(err));
  };

  //login to the user home page function
  return accessHomePage(token);
}
