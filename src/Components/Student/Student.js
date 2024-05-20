import "./Student.css";
const Student = (props) => {
  const { student, oder, deleteStudent } = props;
  const { studentName, classCode, math, phy, chem, id } = student || {};
  const gpa = ((+math + +phy + +chem) / 3).toFixed(2);
  const calculateRating = (gpa) => {
    if (gpa == 0) {
      return "Quá yếu kém";
    } else if (gpa <= 3) {
      return "Yếu";
    } else if (gpa > 3 && gpa <= 5) {
      return "Trung bình";
    } else if (gpa > 5 && gpa <= 8) return "Khá";
    else {
      return "Giỏi";
    }
  };
  const rating = calculateRating(gpa);

  return (
    <tr>
      <th scope="row">{oder + 1}</th>
      <td>{studentName}</td>
      <td>{classCode}</td>
      <td>{math}</td>
      <td>{phy}</td>
      <td>{chem}</td>
      <td>{gpa}</td>
      <td>{rating}</td>
      <td>
        <div className="d-flex align-items-center">
          <button className="btn btn-danger" onClick={() => deleteStudent(id)}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
export default Student;
