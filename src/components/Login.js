import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Button';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="loginPage">
      <div className="loginImage">
          {error && <Alert severity="error">{error}</Alert>}
          <form>
            <label htmlFor="email">Email: <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='abc@abc.com' /></label>
            <label htmlFor="password">Password: <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Must be >= 6 characters' /></label>
            <Button onClick={handleSubmit} variant="contained" type='submit'>Login</Button>
          </form>
          <div className="AlreadyAccountExist">
            Already have an account? <Link to="/signup">SignUp</Link>
          </div>

          <div className="googleButton">
            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={handleGoogleSignIn}
            />
        </div>
      </div>
    </div>
  );
};

export default Login;
