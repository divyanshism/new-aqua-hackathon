/*import React, { useState } from 'react';
import axios from 'axios';

function AdminCreateHackathon() {
  const [formData, setFormData] = useState({
    title: '',
    type: 'quiz',
    description: '',
    date: '',
    questions: [],
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/hackathons/create', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Hackathon created!');
    } catch (err) {
      alert('Failed to create hackathon');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h2>Create Hackathon</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <select name="type" onChange={handleChange}>
          <option value="quiz">Quiz</option>
          <option value="coding">Coding</option>
        </select>
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <input type="date" name="date" onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AdminCreateHackathon; */
