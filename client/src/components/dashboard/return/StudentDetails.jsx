/* eslint-disable react/prop-types */

const StudentDetails = ({ student }) => {
  return (
    <div className="w-full flex flex-col gap-4 py-4 border-b border-slate-400">
      <div className="w-full flex justify-start items-center gap-2">
        <span className="text-[14px] text-text underline-offset-2 underline ">
          Student Details
        </span>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2 justify-start items-center">
          <span className="text-[16px] text-slate-400">Enrollment:</span>
          <span className="text-[16px] text-primary">
            {student ? student.enrollment_number : ""}
          </span>
        </div>
        <div className="flex gap-2 justify-start items-center">
          <span className="text-[16px] text-slate-400">Branch:</span>
          <span className="text-[16px] text-primary">
            {student ? student.branch : ""}
          </span>
        </div>
      </div>

      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2 justify-start items-center">
          <span className="text-[16px] text-slate-400">Name:</span>
          <span className="text-[16px] text-primary">
            {student ? student.name : ""}
          </span>
        </div>

        <div className="flex gap-2 justify-start items-center">
          <span className="text-[16px] text-slate-400">Semester:</span>
          <span className="text-[16px] text-primary">
            {student ? student.semester : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
