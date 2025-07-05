/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminDashboard from './pages/Admin/Dashboard';
import StudentDashboard from './pages/Student/studentDash';
import MyResults from './pages/myResult';



import AdminCreateHackathon from './pages/Admin/AdminCreateHackathons';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/studentdash" element={<StudentDashboard />} />
        <Route path="/admin/create-hackathon" element={<AdminCreateHackathon/>} />
        <Route path="/student/results" element={<MyResults />} />
      </Routes>
    </Router>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminDashboard from './pages/Admin/Dashboard';
import StudentDashboard from './pages/Student/studentDash';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/studentDash" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

