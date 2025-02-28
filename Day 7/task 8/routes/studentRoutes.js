const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// @route   GET /students/search?q=<rollNoOrStudentId>
// @desc    Search students by roll number or student ID
router.get('/search', async (req, res) => {
  const query = req.query.q; // Get the query parameter
  if (!query) {
    return res.status(400).json({ message: 'Query parameter q is required' });
  }

  try {
    const students = await Student.find({
      $or: [
        { rollNo: { $regex: query, $options: 'i' } },  // Case-insensitive match for roll number
        { studentId: { $regex: query, $options: 'i' } } // Case-insensitive match for student ID
      ]
    });

    if (students.length === 0) {
      return res.status(404).json({ message: 'No matching students found' });
    }

    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
