const Participation = require('../models/Participation');



const Hackathon = require('../models/hackathonModel');
const User = require('../models/user'); 

exports.joinHackathon = async (req, res) => {
  const userId = req.user.id;
  const { hackathonId } = req.body;

  try {
    // Check if already joined
    const alreadyJoined = await Participation.findOne({
      user: userId,
      hackathon: hackathonId,
    });

    if (alreadyJoined) {
      return res.status(400).json({ message: 'Already joined this hackathon' });
    }

    // Save participation
    const participation = new Participation({
      user: userId,
      hackathon: hackathonId,
    });

    await participation.save();

    res.status(201).json({ message: 'Joined hackathon successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error joining hackathon' });
  }
};


exports.getJoinedHackathons = async (req, res) => {
  try {
    const participations = await Participation.find({ user: req.user.id }).populate('hackathon');
    const joinedHackathons = participations.map(p => p.hackathon);
    res.json(joinedHackathons);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch joined hackathons' });
  }
};

exports.submitHackathon = async (req, res) => {
  const { hackathonId, stars } = req.body;
  const userId = req.user.id;

  try {
    const participation = await Participation.findOne({ user: userId, hackathon: hackathonId });
    if (!participation) {
      return res.status(404).json({ message: 'Participation not found' });
    }

    participation.stars = stars;
    await participation.save();

    res.json({ message: 'Submission recorded' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit' });
  }
};
// ✅ Get all participations of the logged-in user
exports.getUserParticipations = async (req, res) => {
  try {
    const userId = req.user.id;

    const participations = await Participation.find({ user: userId })
      .populate('hackathon', 'title type date') // populate title, type, date of hackathon
      .sort({ submittedAt: -1 });

    res.status(200).json(participations);
  } catch (error) {
    console.error('Error fetching participation history:', error);
    res.status(500).json({ message: 'Failed to fetch participation history' });
  }


exports.submitParticipation = async (req, res) => {
  try {
    const userId = req.user.id;
    const { hackathonId, answers } = req.body;

    // ✅ Check if already submitted
    const existing = await Participation.findOne({ user: userId, hackathon: hackathonId });
    if (existing) {
      return res.status(400).json({ message: 'You have already submitted this hackathon.' });
    }

    const hackathon = await Hackathon.findById(hackathonId);
    if (!hackathon) {
      return res.status(404).json({ message: 'Hackathon not found' });
    }

    let score = 0;

    if (hackathon.type === 'quiz') {
      hackathon.questions.forEach((question, index) => {
      if (
  answers[index] &&
  question?.correctAnswer &&
  answers[index].toLowerCase().trim() === question.correctAnswer.toLowerCase().trim()
)
{
          score++;
        }
      });
    }

    const participation = new Participation({
      user: userId,
      hackathon: hackathonId,
      answers,
      score: hackathon.type === 'quiz' ? score : null,
      submittedAt: new Date(),
    });

    await participation.save();

    res.status(200).json({
      message: 'Participation submitted successfully',
      ...(hackathon.type === 'quiz' && { score }),
    });

  } catch (error) {
    console.error('Error submitting participation:', error);
    res.status(500).json({ message: 'Failed to submit participation' });
  }
}
}
// make sure it's imported

exports.getLeaderboard = async (req, res) => {
  try {
    const { hackathonId } = req.params;

    const leaderboard = await Participation.find({ hackathon: hackathonId, score: { $ne: null } })
      .populate('user', 'name email') // show name/email of user
      .sort({ score: -1, submittedAt: 1 }) // sort by high score, then by early submission
      .limit(10); // top 10

    res.status(200).json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ message: 'Failed to fetch leaderboard' });
  }
};
