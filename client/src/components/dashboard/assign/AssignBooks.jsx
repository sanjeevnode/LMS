import { useState } from "react";
import SelectBooks from "./SelectBooks";
import SelectStudents from "./SelectStudents";
import Summary from "./Summary";

const AssignBooks = () => {
  const [currentStudent, setCurrentStudent] = useState({});
  const [bookList, setBookList] = useState([]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
        {/* Select  studets */}
        <SelectStudents
          setCurrentStudent={setCurrentStudent}
          bookList={bookList}
        />

        {/* select books */}
        <SelectBooks setBookList={setBookList} />
      </div>
      <Summary
        currentStudent={currentStudent}
        setBookList={setBookList}
        bookList={bookList}
        setCurrentStudent={setCurrentStudent}
      />
    </div>
  );
};

export default AssignBooks;
