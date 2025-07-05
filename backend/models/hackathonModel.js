const mongoose = require('mongoose');

const hackathonSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String, // 'quiz' or 'coding'
  date: Date,
  questions: [
    {
      question: String,
      options: [String], // for quiz
      correctAnswer: String,
      codingTask: String, // for coding
    }
  ]
});

// ✅ THIS LINE creates the model from the schema
const Hackathon = mongoose.model('Hackathon', hackathonSchema);

// ✅ THIS LINE exports it properly for use in controllers
module.exports = Hackathon;
