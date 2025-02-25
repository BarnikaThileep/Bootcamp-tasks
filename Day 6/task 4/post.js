const express = require('express');
const body= require('./body.json');
const app = express();
const port = 3000;

app.use(express.json());

// Hardcoded array to store users
let users = [];

// POST endpoint to add a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    
    res.status(201).json({ message: 'User added successfully', user: newUser });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
