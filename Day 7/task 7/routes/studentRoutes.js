const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// @route   GET /students
// @desc    Get all students with pagination
router.get('/', async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    
    // Convert to numbers and set default values
    page = parseInt(page) || 1;
    pageSize = parseInt(pageSize) || 10;
    
    // Calculate the number of students to skip
    const skip = (page - 1) * pageSize;

    // Get total count of students
    const totalStudents = await Student.countDocuments();

    // Get students with pagination
    const students = await Student.find().skip(skip).limit(pageSize);

    res.json({
      totalStudents,
      currentPage: page,
      totalPages: Math.ceil(totalStudents / pageSize),
      pageSize,
      students,
    });

  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

// @route   GET /students/:id
// @desc    Get student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;
