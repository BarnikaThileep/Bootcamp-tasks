const express = require('express');
const router = express.Router();
const Student = require('../models/Student.js');

// @route   GET /students/:id
// @desc    Get student by ID
router.get('/:id', async (req, res) => {
    console.log('Requested ID:', req.params.id);  // ✅ Debug line
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
