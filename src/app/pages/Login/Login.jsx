import React from "react";
import "../Login/Login.scss";
import logo from "../../assets/logo.png";

import { Button } from "primereact/button";

const Login = () => {
  return (
    <div class="login_page">
      <div class="welcome">
        <h1 class="heading">
          Welcome to <span class="merina">MERINA</span>
        </h1>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="login_form"></div>
    </div>
  );
};

export default Login;
