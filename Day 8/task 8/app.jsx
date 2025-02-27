import React, { useState } from "react";

// StudentCard Component
const StudentCard = ({ student, onRemove }) => {
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
      <button onClick={() => onRemove(student.name)} className="mt-2 bg-red-500 text-white px-2 py-1 text-xs rounded">Remove</button>
    </div>
  );
};

// StudentList Component
const StudentList = () => {
  const [students, setStudents] = useState([
    { name: "Barnika", major: "Chemistry", year: "Fresher" },
    { name: "Abidha Shree", major: "Mathematics", year: "Senior" },
    { name: "John", major: "Physics", year: "Junior" }
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newStudent, setNewStudent] = useState({ name: "", major: "", year: "" });

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addStudent = () => {
    if (newStudent.name && newStudent.major && newStudent.year) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: "", major: "", year: "" });
    }
  };

  const removeStudent = (name) => {
    setStudents(students.filter(student => student.name !== name));
  };

  return (
    <div className="student-list">
      <input
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded mb-4 w-full"
      />
      <div className="mb-4">
        <input type="text" placeholder="Name" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} className="p-2 border rounded mr-2" />
        <input type="text" placeholder="Major" value={newStudent.major} onChange={(e) => setNewStudent({ ...newStudent, major: e.target.value })} className="p-2 border rounded mr-2" />
        <input type="text" placeholder="Year" value={newStudent.year} onChange={(e) => setNewStudent({ ...newStudent, year: e.target.value })} className="p-2 border rounded mr-2" />
        <button onClick={addStudent} className="bg-blue-500 text-white p-2 rounded">Add Student</button>
      </div>
      {filteredStudents.map((student, index) => (
        <StudentCard key={index} student={student} onRemove={removeStudent} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Directory</h1>
      <StudentList />
    </div>
  );
};

export default App;


