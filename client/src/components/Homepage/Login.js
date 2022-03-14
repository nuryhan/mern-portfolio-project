import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Register from "./Register";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="main-container">
          <h3> Login for Admin </h3>

          <div className="login-center">
            <form>
              <p> you edited it</p>

              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="import email..."
                name="email"
                id="email"
                required
              />

              <label htmlFor="password">Pasword</label>
              <input
                type="password"
                placeholder="import password..."
                name="password"
                required
              />

              <div className="login-btn">
                <button type="submit">Login</button>

                <Link to="/">
                  <button> Home </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* register */}
      <Register />
    </>
  );
};

export default Login;
