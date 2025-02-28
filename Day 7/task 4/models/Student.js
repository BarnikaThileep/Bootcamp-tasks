const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  course: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true }  // 🔥 Changed to String
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
