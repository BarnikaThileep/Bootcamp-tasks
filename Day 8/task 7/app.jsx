import React, { useState } from "react";

// StudentCard Component
const StudentCard = ({ student }) => {
  const yearColors = {
    Fresher: "freshman",
    Sophomore: "sophomore",
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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-list-container">
      <input
        type="text"
        placeholder="Search students..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        
      />
      <div className="student-list">
      {filteredStudents.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}</div>
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
.freshman {
    background-color: yellow;
  }
  

  .junior {
    background-color: rgb(194, 75, 205);
  }
  
  .senior {
    background-color: rgb(57, 90, 233);
  }
  
  .default {
    background-color: gray;
  }
