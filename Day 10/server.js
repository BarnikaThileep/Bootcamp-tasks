const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/barnika", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Task Schema
const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    dueDate: String
});

const Task = mongoose.model("Task", TaskSchema);

// Routes

// Get all tasks
app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Add a new task
app.post("/tasks", async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        const newTask = new Task({ title, description, status, dueDate });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: "Failed to add task" });
    }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
