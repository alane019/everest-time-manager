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
      return <Main token={token} />;
    }
    return (
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab">
            Sign Up
          </label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Email
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
              </div>
              <div class="group">
                <input
                  type="submit"
                  class="button"
                  value="Sign In"
                  onClick={(e) => handleSigninForm(e)}
                />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  Full Name
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  onChange={(e) => setRepeatedPassword(e.target.value)}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  class="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="group">
                <input
                  type="submit"
                  class="button"
                  value="Sign Up"
                  onClick={(e) => handleSignupForm(e)}
                />
              </div>

              <div class="foot-lnk"></div>
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
          console.log(res.data);
          setToken(res.data.token);
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
        }
      })
      .catch((err) => console.log(err));
  };

  //login to the user home page function
  return accessHomePage(token);
}
