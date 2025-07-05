

const express = require('express');
const router = express.Router();
const { createHackathon, getAllHackathons, getHackathonById } = require('../controllers/hackathonController');
const authMiddleware = require('../middleware/authMiddleware');

// POST: Create new hackathon
router.post('/create', authMiddleware, createHackathon);

// ✅ GET: All hackathons (for students)
router.get('/', authMiddleware, getAllHackathons);
router.get('/:id', authMiddleware, getHackathonById);


module.exports = router;
