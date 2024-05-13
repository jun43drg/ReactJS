import "./StudentManagement.css";
import Student from "../Student/Student.js";
const studentData = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    classCode: "12A",
    math: "8",
    phy: "7",
    chem: "4",
  },
  {
    id: "2",
    name: "Nguyễn Văn B",
    classCode: "10A",
    math: "5",
    phy: "4",
    chem: "4",
  },
  {
    id: "3",
    name: "Nguyễn Văn C",
    classCode: "9A",
    math: "5",
    phy: "4",
    chem: "10",
  },
];
const StudentManagement = () => {
  let listStudentElements = studentData.map((student) => {
    const { name, classCode, math, phy, chem } = student;
    return (
      <Student
        studentName={name}
        classCode={classCode}
        math={math}
        phy={phy}
        chem={chem}
      />
    );
  });
  return (
    <>
      <h1>Dự án quản lý học sinh</h1>
      <div className="student-list">{listStudentElements}</div>
    </>
  );
};
export default StudentManagement;
