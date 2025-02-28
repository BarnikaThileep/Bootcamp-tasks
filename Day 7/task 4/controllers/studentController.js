const Student = require('../models/studentModel');

// Update student by ID with conflict check
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { rollNo, studentId, ...updateData } = req.body;

  try {
    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    // Check for rollNo conflict
    if (rollNo && rollNo !== student.rollNo) {
      const rollNoExists = await Student.findOne({ rollNo });
      if (rollNoExists) return res.status(409).json({ message: 'rollNo already exists' });
      student.rollNo = rollNo;
    }

    // Check for studentId conflict
    if (studentId && studentId !== student.studentId) {
      const studentIdExists = await Student.findOne({ studentId });
      if (studentIdExists) return res.status(409).json({ message: 'studentId already exists' });
      student.studentId = studentId;
    }

    Object.assign(student, updateData); // Update other fields
    await student.save();

    res.status(200).json({ message: 'Student updated successfully', student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { updateStudent };
