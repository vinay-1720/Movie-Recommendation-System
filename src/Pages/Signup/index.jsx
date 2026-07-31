import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        name,
        email,
        password,
      })
    );

    alert("Account Created Successfully 🎉");

    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">🎬 MovieHub</h1>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Enter Name"
          className="auth-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="auth-btn"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <p className="auth-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;