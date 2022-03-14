import React from "react";
import { Link } from "react-router-dom";
import AltSignIn from "./AltSignIn";

function Login() {
  return (
    <div className="login">
      <div className="login__inner">
        <div className="login__header">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
        </div>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>

        <p className="login__register">
          Not a member? <Link to="/register">Register</Link>
        </p>

        <AltSignIn />
      </div>
    </div>
  );
}

export default Login;
