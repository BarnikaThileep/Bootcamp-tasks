const express = require('express');
const router = express.Router();  // ✅ Create router instance
const Student = require('../models/Student.js');

// @route   PUT /students/:id
// @desc    Update student by ID with rollNo conflict handling
router.put('/:id', async (req, res) => {
  const { name, age, course, rollNo } = req.body;

  try {
    // 🔎 Check for rollNo conflict
    if (rollNo) {
      const existingStudent = await Student.findOne({ rollNo, _id: { $ne: req.params.id } });
      if (existingStudent) {
        return res.status(409).json({ message: 'rollNo already exists for another student' });
      }
    }

    // 📝 Update student
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { name, age, course, rollNo },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student updated successfully', student: updatedStudent });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;  // ✅ Export the router
