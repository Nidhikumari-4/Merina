import React from "react";
import "./Login.scss";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { Checkbox } from "primereact/checkbox";

const LoginPage = () => {
  return (
    <div className="login_page">
      <div className="welcome">
        <h1 className="heading">
          Welcome to <span className="merina">MERINA</span>
        </h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="login_form">
        <div className="logo">
          <Image src="/logo.png" alt="Image" width="200" />
          <p className="username_password">Enter your username and password</p>
        </div>
        <span className="input_area">
          <span>
            <InputText type="email" placeholder="Email" className="email" />
          </span>
          <span>
            <InputText
              type="password"
              placeholder="Password"
              className="password"
            />
          </span>
        </span>

        <p className="forgot_passwors">Forgot Password?</p>

        <span className="remember_me">
          <Checkbox inputId="ingredient1" value="Remember Me" />
          <label htmlFor="ingredient1" className="ml-2">
            Remember Me
          </label>
        </span>

        <Button className="btn_submit" label="Sign In" />
      </div>
    </div>
  );
};

export default LoginPage;
