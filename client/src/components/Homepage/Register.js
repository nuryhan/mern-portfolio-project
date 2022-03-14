import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="login">
        <div className="main-container">
          <h3> Login for Admin </h3>

          <div className="login-center">
            <form>
              <p> you edited it</p>

              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="import username..."
                name="username"
                required
              />

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
                <button type="submit">Register</button>

                <Link to="/">
                  <button> Home </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* register */}
    </div>
  );
};

export default Register;
