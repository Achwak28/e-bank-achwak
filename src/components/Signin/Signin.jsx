import React from "react";
import "./Signin.css";
import { Form, FormInput, FormLabel, Icon } from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <div className="container">
        <div className="form-wrap">
          <Icon className="icon" to="/">Zero<span style={{color : "#01e485"}}>C</span>ash</Icon>
          <div className="form-content">
            <Form action="#">
              <h1 className="form-h1">Sign in to your account</h1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <button className="form-button" type="submit">
                Continue
              </button>
              <span className="text">Forgot password</span>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
