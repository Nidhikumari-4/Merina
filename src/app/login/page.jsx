"use client";

import React, { useState } from "react";
import "./Login.scss";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { Checkbox } from "primereact/checkbox";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!(email || password)) {
      toast.error("Please enter email and password");
      return;
    }
    try {
      const res = await axios.post(`${process.env.SERVER_URL}/api/v1/login`, {
        email,
        password,
      });
      console.log(res.data, "here");
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        toast.success("Login Success");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  };

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

      <form className="login_form" onSubmit={handleSubmit}>
        <div className="logo">
          <Image src="/logo.png" alt="Image" width="200" />
          <p className="username_password">Enter your email and password</p>
          <p className="username_password">
            email: admin@dair.cloud
            <br />
            password: merina
          </p>
        </div>
        <span className="input_area">
          <span>
            <InputText
              type="email"
              name="email"
              required
              defaultValue="admin@dair.cloud"
              placeholder="Email"
              className="email"
            />
          </span>
          <span>
            <InputText
              type="password"
              name="password"
              required
              defaultValue="merina"
              placeholder="Password"
              className="password"
            />
          </span>
        </span>

        <p className="forgot_passwors">Forgot Password?</p>

        <span className="remember_me">
          <Checkbox
            id="remember"
            name="remember"
            onChange={(e) => setChecked(e.checked)}
            checked={checked}
          ></Checkbox>
          <label htmlFor="remember" className="ml-2">
            Remember Me
          </label>
        </span>

        <Button className="btn_submit" type="submit" label="Sign In" />
      </form>
    </div>
  );
};

export default LoginPage;
