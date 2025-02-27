import React from "react";
import "./StudentCard.css";

export default function StudentCard({ name, major, year }) {
  return (
    <div className="student-card">
      <h2 className="student-name">Name:Barnika {name}</h2>
      <p className="student-major">Major:IT {major}</p>
      <p className="student-year">Year:Third Year {year}</p>
    </div>
  );
}

