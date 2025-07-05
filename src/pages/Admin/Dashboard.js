/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [hackathons, setHackathons] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  const fetchHackathons = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/hackathons', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setHackathons(res.data);
    } catch (err) {
      console.error('Error fetching hackathons', err);
    }
  };

  const handleViewParticipants = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/hackathons/${id}/participants`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (res.data.length === 0) {
        alert('No participants yet.');
      } else {
        const formatted = res.data.map((p, i) => `${i + 1}. ${p.name} (${p.email})`).join('\n');
        alert(`Participants:\n\n${formatted}`);
      }
    } catch (err) {
      console.error('Error fetching participants', err);
      alert('Failed to fetch participants');
    }
  };

  useEffect(() => {
    fetchHackathons();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>

      <h3>All Hackathons:</h3>
      {hackathons.length === 0 ? (
        <p>No hackathons created yet.</p>
      ) : (
        <ul>
          {hackathons.map((hack) => (
            <li key={hack._id} style={styles.hackCard}>
              <strong>{hack.title}</strong> — {hack.date.slice(0, 10)} ({hack.mode})
              <br />
              <button
                onClick={() => handleViewParticipants(hack._id)}
                style={styles.viewBtn}
              >
                View Participants
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: { padding: '30px', fontFamily: 'Arial' },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  logoutBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
  },
  hackCard: {
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '12px',
    marginBottom: '10px',
    listStyle: 'none',
  },
  viewBtn: {
    marginTop: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '5px',
  },
};

export default AdminDashboard;
*/

// src/components/AdminDashboard.js
// src/components/AdminDashboard.js
import React from 'react';
import '../auth/styles/admindash.css';
import {
  FaUsers,
  FaCogs,
  FaPlus,
  FaTrophy,
  FaChartBar,
  FaUserCircle,
  FaSignOutAlt
} from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><FaUsers className="FaUsers" /> User Management</li>
          <li><FaCogs className="FaCogs" /> Hackathons</li>
          <li><FaPlus className=" FaPlus" /> Create Hackathon</li>
          <li><FaChartBar className=" FaTrophy" /> Leaderboard</li>
          <li><FaTrophy className="FaChartBar" /> Recent Hackathons</li>
          <li><FaUserCircle className="FaUserCircle" /> Profile</li>
          <li><FaSignOutAlt className=" FaSignOutAlt" /> Logout</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <h1>Welcome, Admin 🎓</h1>
        <div className="card-container">
          <div className="card blue">
            <p>Users</p>
            <h2>15</h2>
          </div>
          <div className="card green">
            <p>Ongoing Hackathons</p>
            <h2>3</h2>
          </div>
          <div className="card orange">
            <p>Leaderboard</p>
            <h2>#1 - Team Alpha</h2>
          </div>
          <div className="card red">
            <p>Recent Hackathons</p>
            <h2>2</h2>
          </div>
        </div>
      <div className="dashboard-footer-image">
  <img src="/hackimg.png" alt="Admin Illustration" />
</div>


      </main>
    </div>
  );
};

export default AdminDashboard;
