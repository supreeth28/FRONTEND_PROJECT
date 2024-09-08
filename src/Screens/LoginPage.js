import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Normally, here you would send the login data to a server
    console.log({ email, password });
    navigate('/EmployeeDetailsPage');
  };

  const handleForgotPassword = () => {
    // Logic for forgot password
    navigate('/ForgotPasswordPage');
    alert("Forgot password functionality to be implemented.");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <button onClick={handleForgotPassword}>Forgot Password</button>
    </div>
  );
}

export default LoginPage;