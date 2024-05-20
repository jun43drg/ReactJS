import "./StudentManagement.css";
import Student from "../Student/Student.js";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import StudentTabel from "../StudentTabel/StudentTabel.js";
import AddNewStudent from "../AddNewStudent/AddNewStudent.js";
const studentData = [
  {
    studentName: "Nguyễn Văn A",
    classCode: "12A",
    math: 8,
    phy: 7,
    chem: 4,
    id: "b337e3a8-353e-4746-a6f9-a367c670e01c",
  },
  {
    studentName: "Nguyễn Văn B",
    classCode: "10A",
    math: 5,
    phy: 4,
    chem: 4,
    id: "7d0d6126-bea3-410b-9393-d7659c57c877",
  },
  {
    studentName: "Nguyễn Văn C",
    classCode: "9A",
    math: 5,
    phy: 4,
    chem: 10,
    id: "e1c08266-2ba0-4498-b81e-9076bb01592d",
  },
  {
    studentName: "Nguyễn Văn E",
    classCode: "11A",
    math: 8,
    phy: 6,
    chem: 0,
    id: "caaff03a-fb18-4a2c-acd1-13e3995327fa",
  },
];
const StudentManagement = () => {
  const [studentList, setStudentList] = useState(studentData);

  const onAddStudentHandler = (student) => {
    const newStudent = { ...student, id: uuidv4() };
    setStudentList([...studentList, newStudent]);
  };

  const onDeleteStudentHandler = (id) => {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (isConfirmed) {
      const filteredStudentList = studentList.filter(
        (student) => student.id !== id
      );
      setStudentList(filteredStudentList);
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">Dự án quản lý học sinh</h1>
      <AddNewStudent AddNewStudent={onAddStudentHandler} />
      <div className="d-flex align-item-center justify-content-end gap-4 my-3">
        <button className="btn btn-success">Sắp xếp</button>
      </div>
      {/* <div className="student-list">{listStudentElements}</div> */}
      <StudentTabel
        studentList={studentList}
        deleteStudent={onDeleteStudentHandler}
      />
    </div>
  );
};
export default StudentManagement;
