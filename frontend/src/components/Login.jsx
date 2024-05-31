// src/components/Login.jsx
import React from 'react';
import LoginForm from './LoginForm';
import './Login.css'; 

function Login() {
  return (
    <div className="login-background">
      <div className="login-form-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
