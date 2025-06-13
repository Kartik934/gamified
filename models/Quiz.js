const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOptionIndex: { type: Number, required: true }
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  questions: [questionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);

