import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../api/AxiosInstance';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await AxiosInstance.post('/login/api/login/', {
        username,
        password,
      });

      setMessage('Login successful');
      console.log('Response:', response.data);
      navigate('/cultivos');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please check your credentials and try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username:</label>
        <input
          type="text"
          id="username"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

export default LoginForm;
