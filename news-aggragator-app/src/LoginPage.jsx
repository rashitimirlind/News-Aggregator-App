import React, { useState } from "react";

export const LoginPage = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginHandler = () => {
    if (email.length < 4 || password.length < 4) {
      alert("Please fill your inputs correctly");
      return;
    }
    localStorage.setItem("username", email);
    localStorage.setItem("password", password);
    setLoggedIn(true);
  };

  return (
    <div className="login-page-container">
      <style>
        {`
          .login-page-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f5f5f5;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
          }

          .login-card {
            background: #ffffff;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            width: 100%;
            max-width: 400px;
            border: 1px solid #f0f0f0;
          }

          .login-header {
            margin-bottom: 32px;
            text-align: center;
          }

          .login-header h2 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            color: #1a1a1a;
          }

          .login-header p {
            color: #8c8c8c;
            margin-top: 8px;
            font-size: 14px;
          }

          .input-group {
            margin-bottom: 20px;
          }

          .login-input {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid #d9d9d9;
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.3s;
            box-sizing: border-box;
          }

          .login-input:focus {
            outline: none;
            border-color: #1677ff;
            box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.1);
          }

          .login-button {
            width: 100%;
            padding: 12px;
            background-color: #1677ff;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s ease;
            margin-top: 10px;
          }

          .login-button:hover {
            background-color: #4096ff;
          }

          .login-button:active {
            background-color: #0958d9;
          }
        `}
      </style>

      <div className="login-card">
        <div className="login-header">
          <h2>NewsFlow</h2>
          <p>Sign in to your account</p>
        </div>

        <div className="input-group">
          <input
            type="text"
            className="login-input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={onLoginHandler}>
          Log in
        </button>
      </div>
    </div>
  );
};
