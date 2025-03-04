
import { useEffect } from "react";
import { useEffect } from "react";

useEffect(() => {
    fetch("http://localhost:5000/tasks")
        .then(res => res.json())
        .then(data => setTasks(data))
        .catch(error => console.error("Error fetching tasks:", error));
}, []);



const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskStatus, setTaskStatus] = useState("Pending");
    const [taskDueDate, setTaskDueDate] = useState("");
    const addTask = async () => {
      if (!taskTitle || !taskDescription || !taskDueDate) {
          alert("Please fill out all fields!");
          return;
      }
  
      const newTask = {
          title: taskTitle,
          description: taskDescription,
          status: taskStatus,
          dueDate: taskDueDate
      };
  
      try {
          const response = await fetch("http://localhost:5000/tasks", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(newTask)
          });
  
          if (response.ok) {
              const savedTask = await response.json();
              setTasks([...tasks, savedTask]);  // Update state with new task
              setTaskTitle("");
              setTaskDescription("");
              setTaskStatus("Pending");
              setTaskDueDate("");
          } else {
              alert("Failed to add task");
          }
      } catch (error) {
          console.error("Error adding task:", error);
      }
  };
  

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="container bg-light p-4 rounded shadow mt-5" style={{ maxWidth: "400px" }}>
            <h2 className="text-center mb-3">Task Manager</h2>

            <input type="text" className="form-control mb-2" placeholder="Task Title" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
            <input type="text" className="form-control mb-2" placeholder="Task Description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
            <select className="form-control mb-2" value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <input type="date" className="form-control mb-2" value={taskDueDate} onChange={(e) => setTaskDueDate(e.target.value)} />
            <button className="btn btn-success w-100 mb-3" onClick={addTask}>Add Task</button>

            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{task.title}</strong> - {task.description} <br />
                            <small>Status: {task.status} | Due: {task.dueDate}</small>
                        </div>
                        <button className="btn btn-danger btn-sm" onClick={() => removeTask(task.id)}>✖</button>
                    </li>
                ))}
            </ul>
        </div>
    );}


export default ToDoList;
