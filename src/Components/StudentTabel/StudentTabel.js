import Student from "../Student/Student";
const StudentTabel = (props) => {
  const { studentList, deleteStudent } = props;
  const tableBody = studentList.map((student, index) => {
    return (
      <Student student={student} oder={index} deleteStudent={deleteStudent} />
    );
  });
  return (
    <div className="student-list">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Lớp học</th>
            <th scope="col">Điểm toán</th>
            <th scope="col">Điểm lý</th>
            <th scope="col">Điểm hóa</th>
            <th scope="col">GPA</th>
            <th scope="col">Xếp loại</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};
export default StudentTabel;
