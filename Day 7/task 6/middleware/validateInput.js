const Joi = require('joi');

const studentValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  rollNo: Joi.string().pattern(/^\d{4,10}$/).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(10).max(100).required()
});

const validateStudent = (req, res, next) => {
  const { error } = studentValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validateStudent;
