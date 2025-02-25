const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 2000;

app.use(express.json());

// Hardcoded array to store users
let users = [];

// POST endpoint to add a new user with validation
app.post(
    '/users',
    [
        body('name')
            .trim()
            .isString()
            .notEmpty()
            .withMessage('Name is required and must be a string'),
        body('email')
            .isEmail()
            .withMessage('Invalid email format')
            .normalizeEmail(),
    ],
    (req, res) => {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email } = req.body;

        // Check if email already exists
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            return res.status(409).json({ message: 'Email already in use' }); // Conflict error
        }

        const newUser = { id: users.length + 1, name, email };
        users.push(newUser);

        res.status(201).json({ message: 'User added successfully', user: newUser });
    }
);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
