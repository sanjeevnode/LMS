/* eslint-disable react/prop-types */
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const StudentList = ({
  students,
  handleDeleteStudent,
  setCurrentStudent,
  edit,
}) => {
  return (
    <>
      <table className=" table-auto w-full border text-[12px] border-separate text-center p-2">
        <tbody>
          <tr>
            <th>Sno.</th>
            <th>Enrollment Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Actions</th>
          </tr>
          {students.map((student, index) => {
            const handleEditClicked = () => {
              setCurrentStudent(student);
              edit.current = true;
            };

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.enrollment_number}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.branch}</td>
                <td>{student.semester}</td>
                <td className="flex gap-2 justify-center items-center">
                  <BiEdit
                    onClick={handleEditClicked}
                    className="text-[rgb(121,167,231)] text-[20px] cursor-pointer"
                  />
                  <AiOutlineDelete
                    onClick={() => {
                      handleDeleteStudent(student._id);
                      setCurrentStudent({
                        enrollment_number: "",
                        name: "",
                        email: "",
                        phone: "",
                        branch: "",
                        semester: "",
                      });
                      edit.current = false;
                    }}
                    className="text-[rgb(231,107,111)] text-[20px] cursor-pointer"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StudentList;
