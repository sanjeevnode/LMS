import toast from "react-hot-toast";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../App";
import { deleteStudent } from "../../config";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
const Students = () => {
  // const [students, setStudents] = useState([]);

  const { students, handleGetStudents } = useContext(Context);
  const [currentStudent, setCurrentStudent] = useState({
    enrollment_number: "",
    name: "",
    email: "",
    phone: "",
    branch: "",
    semester: "",
  });

  const [query, setQuery] = useState("");
  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(query.toLowerCase()) ||
      student.enrollment_number.toLowerCase().includes(query.toLowerCase())
    );
  });

  const edit = useRef(false);
  // const handleGetStudents = async () => {
  //   setLoading(true);
  //   const data = await getStudents();
  //   data.reverse();
  //   setStudents(data);
  //   setLoading(false);
  // };

  const handleDeleteStudent = async (id) => {
    const status = await deleteStudent(id);
    if (status) {
      handleGetStudents();
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    handleGetStudents();
  }, []);

  return (
    <div className="w-full h-full pt-[50px] px-20 flex">
      <div className="flex  flex-col gap-4 w-[30%]  py-4 px-6 relative h-fit">
        <div className="bg-secondary flex justify-center items-center py-2 rounded-sm">
          <p className="text-text text-[20px]">
            {edit.current ? "Update Student" : "Add a new student"}
          </p>
        </div>
        <AddStudent
          handleGetStudents={handleGetStudents}
          currentStudent={currentStudent}
          edit={edit}
          setCurrentStudent={setCurrentStudent}
        />
      </div>
      <div className="flex gap-4  flex-col py-4 px-6 w-[70%] ">
        <div className="bg-secondary flex justify-between items-center  px-8 py-2 rounded-sm">
          <p className="text-text text-[20px]">Student List</p>

          <div className="flex gap-2 justify-center items-center">
            <p className="text-accent text-[16px]">Search</p>
            <input
              className="text-accent outline-none  bg-[#F3F3F3] px-2 py-1 text-[16px] rounded-sm"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full h-auto overflow-y-auto flex flex-col gap-2">
          <StudentList
            students={filteredStudents}
            handleDeleteStudent={handleDeleteStudent}
            setCurrentStudent={setCurrentStudent}
            edit={edit}
          />
        </div>
      </div>
    </div>
  );
};

export default Students;
