/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addStudent, updateStudent } from "../../config";

const AddStudent = ({
  handleGetStudents,
  currentStudent,
  edit,
  setCurrentStudent,
}) => {
  const { register, handleSubmit } = useForm();
  const formSubmit = async (data, e) => {
    if (edit.current) {
      const status = await updateStudent(currentStudent._id, data);
      if (status) {
        handleGetStudents();
        toast.success("Student updated successfully");
        setCurrentStudent({
          enrollment_number: "",
          name: "",
          email: "",
          phone: "",
          branch: "",
          semester: "",
        });
        e.target.reset();
        edit.current = false;
      } else {
        toast.error("Something went wrong");
      }
    } else {
      const status = await addStudent(data);
      if (status) {
        handleGetStudents();
        e.target.reset();
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  const hanndleReset = () => {
    edit.current = false;
    setCurrentStudent({
      enrollment_number: "",
      name: "",
      email: "",
      phone: "",
      branch: "",
      semester: "",
    });
  };

  return (
    <>
      <div className="absolute bottom-5 right-6 z-10">
        <button
          onClick={hanndleReset}
          className=" text-accent text-[12px] py-2 px-4 hover:underline  hover:text-text"
        >
          Reset
        </button>
      </div>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className=" relative w-full flex flex-col gap-4 justify-center p-4 bg-secondary rounded-sm"
      >
        <div className="flex flex-col ">
          <label
            htmlFor="enrollment_number"
            className="text-[12px] text-accent"
          >
            Enrollment Number*
          </label>
          <input
            disabled={edit.current}
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("enrollment_number", { required: true })}
            defaultValue={currentStudent.enrollment_number}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-[12px] text-accent">
            Name*
          </label>
          <input
            disabled={edit.current}
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("name", { required: true })}
            defaultValue={currentStudent.name}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email" className="text-[12px] text-accent">
            Email*
          </label>
          <input
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("email", { required: true })}
            defaultValue={currentStudent.email}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="phone" className="text-[12px] text-accent">
            Phone*
          </label>
          <input
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("phone", { required: true })}
            defaultValue={currentStudent.phone}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="branch" className="text-[12px] text-accent">
            Branch*
          </label>
          <input
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("branch", { required: true })}
            defaultValue={currentStudent.branch}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="semester" className="text-[12px] text-accent">
            Semester*
          </label>
          <input
            type="text"
            className="outline-none text-[15px] text-text p-2 bg-[#f3f3f3] rounded-sm"
            {...register("semester", { required: true })}
            defaultValue={currentStudent.semester}
          />
        </div>
        <div className="flex justify-center ">
          <button className="bg-primary text-secondary text-[15px] py-2 px-4 rounded-sm">
            {edit.current ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddStudent;
