import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../auth/styles/Login.css';

// Constants for roles to avoid typos
const ROLES = {
  ADMIN: 'admin',
  STUDENT: 'student'
};

// API endpoints should be in a config file
const API_ENDPOINTS = {
  LOGIN: 'http://localhost:5000/api/auth/login'
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.post(API_ENDPOINTS.LOGIN, {
        email,
        password,
      });

      const { token, role } = res.data;

      console.log('Login response:', { token, role });

      if (!token || !role) {
        throw new Error('Invalid login response from server');
      }

      // Save to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirect based on role
      switch (role.toLowerCase()) {
        case ROLES.ADMIN:
          navigate('/admin/dashboard');
          break;
        case ROLES.STUDENT:
          navigate('/student/studentdash');
          break;
        default:
          throw new Error(`Unknown role: ${role}`);
      }

    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.message || 
                          'Login failed. Please try again.';
      setError(errorMessage);
      console.error('Login Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Login</h2>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleLogin}>
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />
          <button 
            className="auth-button" 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="auth-links">
          <div className="auth-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </div>
          <div className="auth-link">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;