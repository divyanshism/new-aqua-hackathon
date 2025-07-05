const Hackathon = require('../models/hackathonModel');

// ✅ Create a new hackathon (Admin)
exports.createHackathon = async (req, res) => {
  try {
    const { title, description, type, date, questions } = req.body;

    const newHackathon = new Hackathon({
      title,
      description,
      type, // 'quiz' or 'coding'
      date,
      questions,
    });

    await newHackathon.save();
    res.status(201).json(newHackathon);
  } catch (error) {
    console.error('Error creating hackathon:', error);
    res.status(500).json({ message: 'Failed to create hackathon' });
  }
};

// ✅ Get all hackathons
exports.getAllHackathons = async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.status(200).json(hackathons);
  } catch (error) {
    console.error('Error fetching hackathons:', error);
    res.status(500).json({ message: 'Failed to fetch hackathons' });
  }
};

// ✅ Get a specific hackathon by ID
exports.getHackathonById = async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id);

    if (!hackathon) {
      return res.status(404).json({ message: 'Hackathon not found' });
    }

    res.status(200).json(hackathon);
  } catch (error) {
    console.error('Error fetching hackathon by ID:', error);
    res.status(500).json({ message: 'Error fetching hackathon' });
  }
};
