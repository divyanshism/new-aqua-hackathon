const express = require('express');
const router = express.Router();
const {
  joinHackathon,
  getJoinedHackathons,
  submitHackathon,
  getUserParticipations,
  getLeaderboard // ✅ NEW function added
} = require('../controllers/ParticipationController');

const authMiddleware = require('../middleware/authMiddleware');

// ✅ Existing routes
router.get('/joined', authMiddleware, getJoinedHackathons);
router.post('/join', authMiddleware, joinHackathon);
router.post('/submit', authMiddleware, submitHackathon);

// ✅ New route to fetch participation history
router.get('/my', authMiddleware, getUserParticipations);
router.get('/leaderboard/:hackathonId', getLeaderboard);


module.exports = router;
