import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://tradenova-9d2p.onrender.com/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          window.location.href = "https://tradenova-dashboard-wsw7.onrender.com/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="signup">
      <div className="signup-card">

        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Join TradeNova and start investing smarter.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Username</label>

            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleOnChange}
              required
            />
          </div>

          <button type="submit">
            Create Account
          </button>

        </form>

        <div className="bottom-text">
          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

      <ToastContainer />
    </div>
  );
};

export default Signup;