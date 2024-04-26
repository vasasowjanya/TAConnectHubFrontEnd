import { useEffect, useState } from "react";
import catchAsync from "../../../utils/catchAsync";
import axiosInstance from "../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

interface Course {
  id: string; // Mapped from "_id" with default value "auto()" (likely from a database)
  subject: string;
  crn_number: number;
  course_number: number;
  title: string;
  term: string;
  feedback?: string; // Optional string
}

const Courses = () => {
  const token = localStorage.getItem("token");
  const decodedData = jwtDecode(token as string);

  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    catchAsync(async () => {
      const res = await axiosInstance.get("/courses?get_all=true");
      setCourses(res.data.data.data);
    })();
  }, [refetchTrigger]);

  const refetch = () => {
    setRefetchTrigger((ps) => !ps);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-yellow-600 p-3">Course List</h1>
      <button
        className="btn btn-neutral bg-slate-800 text-white hover:text-black w-full"
        onClick={() => {
          // @ts-ignore
          document.getElementById("create-course-modal").showModal();
        }}
      >
        Add new course
      </button>
      <br />
      <br />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-green-400 font-bold text-white">
            <tr>
              <th>Title</th>
              <th>CRN</th>
              <th>Course Number</th>
              <th>Subject</th>
              <th>Term</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.crn_number}</td>
                <td>{course.course_number}</td>
                <td>{course.subject}</td>
                <td>{course.term}</td>
                <td className="text-center">
                  <button
                    className="btn text-white bg-blue-400 hover:bg-blue-500 btn-sm "
                    onClick={() => {
                      setSelectedCourse(course);
                      // @ts-ignore
                      document.getElementById("edit-course-modal").showModal();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      catchAsync(async () => {
                        const res = await axiosInstance.delete(
                          `/courses/${course.id}`,
                        );
                        toast.success(res.data.message);
                        refetch();
                      })();
                    }}
                    className="btn text-white bg-red-400 hover:bg-red-500 btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <button
        className="btn text-white bg-red-400 hover:bg-red-500"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      {/* create course modal */}
      <dialog id="create-course-modal" className="modal z-50">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Create course</h3>
          <br />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = {};
              formData.forEach((v, k) => {
                // @ts-ignore
                data[k] = v;
                if (k === "crn_number") {
                  // @ts-ignore
                  data[k] = parseInt(v);
                }
                if (k === "course_number") {
                  // @ts-ignore
                  data[k] = parseInt(v);
                }
              });

              catchAsync(async () => {
                const res = await axiosInstance.post("/courses", {
                  // @ts-ignore
                  created_by_id: decodedData.id,
                  ...data,
                });
                toast.success(res.data.message);
                // @ts-ignore
                document.getElementById("create-course-modal").close();
                refetch();
              })();
            }}
          >
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input w-full "
            />
            <br />
            <br />
            <input
              type="number"
              name="crn_number"
              placeholder="CRN"
              className="input w-full "
            />
            <br />
            <br />
            <input
              type="number"
              name="course_number"
              placeholder="Course Number"
              className="input w-full "
            />
            <br />
            <br />
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              className="input w-full "
            />
            <br />
            <br />
            <input
              type="text"
              name="term"
              placeholder="Course Term"
              className="input w-full "
            />
            <br />
            <br />

            <button
              className="btn bg-green-500 hover:bg-green-600 text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>

      {/* edit course modal */}
      <dialog id="edit-course-modal" className="modal z-50">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Edit course</h3>
          <br />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = {};
              formData.forEach((v, k) => {
                // @ts-ignore
                data[k] = v;
                if (k === "crn_number") {
                  // @ts-ignore
                  data[k] = parseInt(v);
                }
                if (k === "course_number") {
                  // @ts-ignore
                  data[k] = parseInt(v);
                }
              });

              catchAsync(async () => {
                const res = await axiosInstance.patch(
                  `/courses/${selectedCourse?.id}`,
                  {
                    // @ts-ignore
                    ...data,
                  },
                );
                toast.success(res.data.message);
                // @ts-ignore
                document.getElementById("edit-course-modal").close();
                refetch();
              })();
            }}
          >
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              defaultValue={selectedCourse?.subject}
              className="input w-full "
            />
            <br />
            <br />
            <input
              type="number"
              name="crn_number"
              placeholder="CRN"
              defaultValue={selectedCourse?.crn_number}
              className="input w-full "
            />
            <br />
            <br />
            <input
              type="number"
              name="course_number"
              placeholder="Course Number"
              defaultValue={selectedCourse?.course_number}
              className="input w-full "
            />
            <br />
            <br />
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              defaultValue={selectedCourse?.title}
              className="input w-full "
            />
            <br />
            <br />
            <input
              type="text"
              name="term"
              placeholder="Course Term"
              defaultValue={selectedCourse?.term}
              className="input w-full "
            />
            <br />
            <br />

            <button
              className="btn bg-green-500 hover:bg-green-600 text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Courses;
