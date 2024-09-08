import React, { useState } from 'react';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleResetPassword = (event) => {
    event.preventDefault();
    // Normally, here you would send the reset password request to a server
    console.log({ email });
    alert("Password reset functionality to be implemented.");
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleResetPassword}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;