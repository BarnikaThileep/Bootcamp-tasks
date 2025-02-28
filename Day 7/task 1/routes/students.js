const express = require('express');
const Student = require('../models/Student');

const router = express.Router();

// POST /students - Add a new student
router.post('/', async (req, res) => {
  const { name, age, major, rollNo } = req.body;

  // Check for missing fields
  if (!name || !age || !major || !rollNo) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check for duplicate rollNo
    const existingStudent = await Student.findOne({ rollNo });
    if (existingStudent) {
      return res.status(409).json({ message: 'rollNo already exists.' });
    }

    // Create and save student
    const student = new Student({ name, age, major, rollNo });
    await student.save();

    res.status(201).json({ message: 'Student created successfully.', studentId: student._id });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
});

module.exports = router;
