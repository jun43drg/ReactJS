import "./StudentManagement.css";
import Student from "../Student/Student.js";
import { useState } from "react";
const studentData = [
  {
    studentName: "Nguyễn Văn A",
    classCode: "12A",
    math: "8",
    phy: "7",
    chem: "4",
  },
  {
    studentName: "Nguyễn Văn B",
    classCode: "10A",
    math: "5",
    phy: "4",
    chem: "4",
  },
  {
    studentName: "Nguyễn Văn C",
    classCode: "9A",
    math: "5",
    phy: "4",
    chem: "10",
  },
  {
    studentName: "Nguyễn Văn E",
    classCode: "11A",
    math: "8",
    phy: "6",
    chem: "0",
  },
];
const StudentManagement = () => {
  const [studentList, setStudentList] = useState(studentData);
  const listStudentElements = studentList.map((student) => (
    <Student {...student} />
  ));

  const onAddStudentHandler = () => {
    const newStudent = {
      studentName: "New Student",
      classCode: "11C",
      math: 5,
      phy: 3,
      chem: 9,
    };

    setStudentList([...studentList, newStudent]);
  };

  return (
    <>
      <h1>Dự án quản lý học sinh</h1>
      <div className="student-controller">
        <button onClick={onAddStudentHandler}>Thêm học sinh mới</button>
        <button>Sắp xếp</button>
      </div>
      <div className="student-list">{listStudentElements}</div>
    </>
  );
};
export default StudentManagement;
