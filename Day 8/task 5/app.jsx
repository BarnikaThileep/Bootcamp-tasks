import React from "react";

// StudentCard Component
const StudentCard = ({ student }) => {
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


