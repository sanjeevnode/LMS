/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../App";
import toast from "react-hot-toast";

const SelectStudents = ({ setCurrentStudent }) => {
  const [query, setQuery] = useState("");
  const { students } = useContext(Context);
  const [filteredStudent, setFilteredStudent] = useState([]);

  useEffect(() => {
    if (query === "") {
      setFilteredStudent([]);
    } else {
      const student = students.filter((student) => {
        return (
          student.name.toLowerCase().includes(query.toLowerCase()) ||
          student.enrollment_number.toLowerCase().includes(query.toLowerCase())
        );
      });

      setFilteredStudent(student);
    }
  }, [query, students]);

  const handleClear = () => {
    setQuery("");
    setFilteredStudent([]);
    setCurrentStudent({});
  };

  const handleSelect = () => {
    if (filteredStudent.length === 0) {
      toast.error("Please select a student", {
        duration: 700,
      });
      return;
    }
    setCurrentStudent(filteredStudent[0]);
    setQuery("");
  };

  return (
    <div className="w-3/4 h-2/5  bg-secondary  rounded-md  flex flex-col gap-2 p-2">
      <div className="flex justify-between px-8 border-b border-gray-300 items-center py-2 rounded-md">
        <span className="text-[16px]  text-text">Select Student</span>
        <div className="flex gap-2 justify-center items-center">
          <input
            type="text"
            className="text-text outline-none  bg-[#F3F3F3] px-3 py-1 text-[14px] rounded-md"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleClear}
            className="outline-none py-1 px-3 rounded-md bg-background  text-accent text-[14px] "
          >
            <span>Clear</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-evenly gap-8 py-6 px-10 w-full h-full">
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-2 justify-start items-center">
            <span className="text-[16px] text-slate-400">Enrollment:</span>
            <span className="text-[16px] text-primary">
              {filteredStudent.length > 0
                ? filteredStudent[0].enrollment_number
                : ""}
            </span>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <span className="text-[16px] text-slate-400">Branch:</span>
            <span className="text-[16px] text-primary">
              {filteredStudent.length > 0 ? filteredStudent[0].branch : ""}
            </span>
          </div>
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="flex gap-2 justify-start items-center">
            <span className="text-[16px] text-slate-400">Name:</span>
            <span className="text-[16px] text-primary">
              {filteredStudent.length > 0 ? filteredStudent[0].name : ""}
            </span>
          </div>

          <div className="flex gap-2 justify-start items-center">
            <span className="text-[16px] text-slate-400">Semester:</span>
            <span className="text-[16px] text-primary">
              {filteredStudent.length > 0 ? filteredStudent[0].semester : ""}
            </span>
          </div>
        </div>

        <div className="flex w-full  justify-end items-center gap-8">
          <button
            onClick={handleSelect}
            className="outline-none py-1 px-3 rounded-sm bg-primary text-secondary"
          >
            <span>Select</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectStudents;
