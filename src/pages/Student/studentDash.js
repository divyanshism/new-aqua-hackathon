/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
// optional CSS file
import '../auth/styles/studentDash.css';
function StudentDashboard() {
  const [hackathons, setHackathons] = useState([]);
  const [joinedHackathonIds, setJoinedHackathonIds] = useState([]);

  useEffect(() => {
    fetchHackathons();
    fetchJoinedHackathons();
  }, []);

  const fetchHackathons = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/hackathons');
      setHackathons(res.data);
    } catch (err) {
      console.error('Failed to fetch hackathons:', err);
    }
  };

  const fetchJoinedHackathons = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/participation/myhackathons', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const joinedIds = res.data.map((p) => p.hackathon);
      setJoinedHackathonIds(joinedIds);
    } catch (err) {
      console.error('Failed to fetch joined hackathons:', err);
    }
  };

  const handleJoin = async (hackathonId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/participation/join',
        { hackathonId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('✅ Successfully joined!');
      fetchJoinedHackathons(); // Refresh joined list
    } catch (err) {
      alert('❌ Failed to join');
      console.error(err);
    }
  };

  return (
    <div className="student-dashboard">
      <h2>Welcome to the Student Dashboard</h2>
      <div className="hackathon-list">
        {hackathons.length === 0 ? (
          <p>No hackathons available.</p>
        ) : (
          hackathons.map((hackathon) => (
            <div key={hackathon._id} className="hackathon-card">
              <h3>{hackathon.title}</h3>
              <p><strong>Type:</strong> {hackathon.type}</p>
              <p><strong>Date:</strong> {new Date(hackathon.date).toLocaleDateString()}</p>
              <p>{hackathon.description}</p>

              {!joinedHackathonIds.includes(hackathon._id) ? (
                <button onClick={() => handleJoin(hackathon._id)}>Join</button>
              ) : (
                <span className="joined-label">✅ Already Joined</span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;*/
// src/components/StudentDashboard.js
import React from 'react';
import {
  FaHome,
  FaUsers,
  FaTrophy,
  FaCode,
  FaComments,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa';

import '../auth/styles/studentDash.css';

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <aside className="sidebar">
        <h2 className="logo">🎓 Student</h2>
        <nav className="sidebar-menu">
          <button><FaHome /> Home</button>
          <button><FaTrophy /> Participation</button>
          <button><FaCode /> Hackathons</button>
          <button><FaUsers /> Team Creation</button>
          <button><FaComments /> Feedback</button>
          <button><FaUser /> Profile</button>
          <button><FaSignOutAlt /> Logout</button>
        </nav>
      </aside>

      <main className="main-content">
        <h1 className="page-title">Welcome to the Student Dashboard</h1>

        <div className="stats-grid">
          <div className="stat-box teal">
            <h3>Teams</h3>
            <p>5</p>
          </div>
          <div className="stat-box purple">
            <h3>Hackathons</h3>
            <p>3</p>
          </div>
          <div className="stat-box orange">
            <h3>Achievements</h3>
            <p>2</p>
          </div>
          <div className="stat-box pink">
            <h3>Participated</h3>
            <p>4</p>
          </div>
        </div>

        <div className="dashboard-footer-image">
          <img src="/hackstuden.avif" alt="Student Illustration" />
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
