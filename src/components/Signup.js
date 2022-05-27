import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Button';
import './signup.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <div className="form">
      {error && <Alert severity="error">{error}</Alert>}
                <form>
                    <label htmlFor="email">Email: <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='abc@abc.com' /></label>
                    <label htmlFor="password">Password: <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Must be >= 6 characters' /></label>
                    <Button onClick={handleSubmit} variant="contained" type='submit'>Signup</Button>
                </form>
      <div className="AlreadyAccountExist">
        Already have an account? <Link to="/">Log In</Link>
      </div>
      </div>
    </div>
  );
};

export default Signup;
