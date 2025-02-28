const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },  // Added rollNo
  studentId: { type: String, required: true, unique: true }, // Added studentId
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model('Student', StudentSchema);
