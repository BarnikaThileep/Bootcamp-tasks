import React from "react";

// StudentCard Component
const StudentCard = ({ student }) => {
  const yearColors = {
    Fresher: "freshman",
    Junior: "junior",
    Senior: "senior",
  };

  return (
    <div className={`student-card ${yearColors[student.year] || 'default'}`}>
      <h2>{student.name}</h2>
      <p>Major: {student.major}</p>
      <p>Year: {student.year}</p>
    </div>
  );
};

// StudentList Component
const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
};

// Example Usage
const studentsData = [
  { name: "Barnika", major: "Chemistry", year: "Fresher" },
  { name: "Abidha Shree", major: "Mathematics", year: "Senior" },
  { name: "John", major: "Physics", year: "Junior" }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Directory</h1>
      <StudentList students={studentsData} />
    </div>
  );
};

export default App;

.css

body {
    background-color: #f3f4f6;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }
  
  .container {
    text-align: center;
    padding: 20px;
  }
  
  .student-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 100px;
  }
  
  .student-card {
    background: white;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 250px;
    transition: transform 0.2s ease-in-out;
  }
  
  .student-card:hover {
    transform: scale(1.05);
  }
  
  .student-card h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 8px;
  }
  
  .student-card p {
    color: #666;
    font-size: 14px;
    margin: 4px 0;
  }
  

