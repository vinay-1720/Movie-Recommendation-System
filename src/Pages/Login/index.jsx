import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
    const registeredUser = JSON.parse(
        localStorage.getItem("registeredUser")
    );

    if (!registeredUser) {
        alert("Please Sign Up First");
        return;
    }

    if (email === registeredUser.email) {
        localStorage.setItem(
        "user",
        JSON.stringify(registeredUser)
        );

        navigate("/");
    } else {
        alert("Invalid Email");
    }
    };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">🎬 MovieHub</h1>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="auth-input"
        />

        <button className="auth-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="auth-text">
          New User?{" "}
          <Link to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;