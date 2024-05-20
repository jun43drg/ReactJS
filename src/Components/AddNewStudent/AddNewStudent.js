import { useState } from "react";

const initialState = {
  studentName: "",
  classCode: "",
  math: "",
  phy: "",
  chem: "",
};
const AddNewStudent = (porps) => {
  const [student, setStudent] = useState(initialState);
  const onChangeHanlder = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };
  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    porps.AddNewStudent(student);
    setStudent(initialState);
  };
  return (
    <div className="mt-3">
      <form onSubmit={onFormSubmitHandler}>
        <div className="row">
          <div className="col-6">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Họ và tên
              </label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                name="studentName"
                value={student.studentName}
                onChange={onChangeHanlder}
              />
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Lớp
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              name="classCode"
              value={student.classCode}
              onChange={onChangeHanlder}
            />
          </div>
          <div className="col-6">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Điểm toán
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              type="munber"
              name="math"
              value={student.math}
              onChange={onChangeHanlder}
            />
          </div>
          <div className="col-6">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Điểm lý
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              type="munber"
              name="phy"
              value={student.phy}
              onChange={onChangeHanlder}
            />
          </div>
          <div className="col-6">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Điểm hóa
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              type="munber"
              name="chem"
              value={student.chem}
              onChange={onChangeHanlder}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Thêm mới học sinh
        </button>
      </form>
    </div>
  );
};

export default AddNewStudent;
