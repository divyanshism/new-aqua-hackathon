import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../auth/styles/Login.css'; // ✅ same CSS as login

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      navigate('/');
    } catch (err) {
      alert('❌ Registration failed');
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="auth-input"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <select
            className="auth-input"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button className="auth-button" type="submit">Register</button>
        </form>

        <div className="auth-link">
          Already have an account? <a href="/">Login here</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
