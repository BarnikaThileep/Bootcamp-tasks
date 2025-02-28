const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// GET /students - Retrieve all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();  // Fetch all students from the database
    res.json(students);                    // Return students as a JSON array
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
