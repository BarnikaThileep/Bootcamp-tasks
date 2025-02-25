const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 2000;

app.use(express.json());

// Hardcoded array to store users
let users = [];

/**
 * ✅ Middleware for Handling Validation Errors
 */
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            success: false, 
            error: "Invalid request",
            details: errors.array() 
        });
    }
    next();
};

/**
 * ✅ POST /users - Add a new user with validation
 */
app.post(
    '/users',
    [
        body('name').trim().isString().notEmpty().withMessage('Name is required and must be a string'),
        body('email').isEmail().withMessage('Invalid email format').normalizeEmail(),
    ],
    validate,
    (req, res, next) => {
        try {
            const { name, email } = req.body;

            // Check if email already exists
            const existingUser = users.find(user => user.email === email);
            if (existingUser) {
                return res.status(409).json({ 
                    success: false, 
                    error: "Conflict",
                    message: "Email already in use"
                });
            }

            const newUser = { id: users.length + 1, name, email };
            users.push(newUser);

            res.status(201).json({ success: true, message: 'User added successfully', user: newUser });
        } catch (error) {
            next(error); // Pass error to global handler
        }
    }
);

/**
 * ✅ GET /users - Get all users
 */
app.get('/users', (req, res, next) => {
    try {
        res.status(200).json({ success: true, users });
    } catch (error) {
        next(error);
    }
});

/**
 * ✅ Global Error Handling Middleware
 */
app.use((err, req, res, next) => {
    console.error("Internal Server Error:", err);
    res.status(500).json({ 
        success: false, 
        error: "Internal Server Error", 
        message: "Something went wrong, please try again later." 
    });
});

/**
 * ✅ Start Server with Error Handling
 */
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Handle port already in use error
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${port} is already in use! Try using another port.`);
        process.exit(1);
    }
});
