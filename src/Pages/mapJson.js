import React from "react";
import "../App.css";
import students from "../Components/siswa.json";

export default function mapJson() {
  return (
    <div className="App-header">
      {students.map((student) => (
        <div key={student.id}>
          <p>Id : {student.id}</p>
          <p>Nama : {student.nama}</p>
          <p>Umur : {student.age}</p>
          <p>Kota : {student.city}</p>
        </div>
      ))}
    </div>
  );
}
