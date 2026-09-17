import { useEffect, useState } from "react"
import StatCard from "../components/StatCard"
import RequestTable from "../components/RequestTable"

function AdminDashboard({ requests, setRequests }) {

  // =========================
  // STUDENT STATE
  // =========================

  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students")

    if (savedStudents) {
      return JSON.parse(savedStudents)
    }

    return [
      {
        id: 1,
        name: "Rahul Kumar",
        rollNo: "CS001",
        branch: "Computer Science",
        semester: "6th"
      },
      {
        id: 2,
        name: "Priya Das",
        rollNo: "CS002",
        branch: "Computer Science",
        semester: "6th"
      }
    ]
  })

  const [showStudentForm, setShowStudentForm] = useState(false)

  const [studentName, setStudentName] = useState("")
  const [rollNo, setRollNo] = useState("")
  const [branch, setBranch] = useState("")
  const [semester, setSemester] = useState("")

  const [studentError, setStudentError] = useState("")


  // Save students whenever students change

  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    )
  }, [students])


  // =========================
  // REQUEST DATA
  // =========================

  const pending = requests.filter(
    (request) => request.status === "Pending"
  ).length

  const approved = requests.filter(
    (request) => request.status === "Approved"
  ).length


  // =========================
  // UPDATE REQUEST STATUS
  // =========================

  const updateStatus = (id, status) => {

    const updatedRequests = requests.map((request) =>
      request.id === id
        ? { ...request, status }
        : request
    )

    setRequests(updatedRequests)

    localStorage.setItem(
      "requests",
      JSON.stringify(updatedRequests)
    )
  }


  // =========================
  // ADD STUDENT
  // =========================

  const addStudent = (e) => {

    e.preventDefault()

    setStudentError("")

    if (
      studentName.trim() === "" ||
      rollNo.trim() === "" ||
      branch.trim() === "" ||
      semester.trim() === ""
    ) {
      setStudentError("Please fill all fields")
      return
    }

    const newStudent = {
      id: Date.now(),
      name: studentName,
      rollNo: rollNo,
      branch: branch,
      semester: semester
    }

    setStudents([...students, newStudent])

    // Clear form

    setStudentName("")
    setRollNo("")
    setBranch("")
    setSemester("")

    setShowStudentForm(false)
  }


  return (

    <div className="space-y-8">

      {/* =========================
          HEADER
      ========================= */}

      <div>

        <h1 className="text-3xl font-bold">
          Admin Dashboard 👨‍💼
        </h1>

        <p className="text-gray-500 mt-1">
          Monitor campus operations and student requests.
        </p>

      </div>


      {/* =========================
          STATISTICS
      ========================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <StatCard
          title="Total Students"
          value={students.length}
          icon="👥"
          description="Registered students"
        />

        <StatCard
          title="Pending Requests"
          value={pending}
          icon="⏳"
          description="Need attention"
        />

        <StatCard
          title="Approved"
          value={approved}
          icon="✅"
          description="Requests approved"
        />

        <StatCard
          title="Resolution Rate"
          value="92%"
          icon="📈"
          description="This month"
        />

      </div>


      {/* =========================
          MANAGE STUDENTS
      ========================= */}

      <div className="bg-white border border-gray-200 rounded-xl p-6">

        <div className="flex justify-between items-center mb-5">

          <div>

            <h2 className="text-xl font-bold">
              Student Management
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Add and view registered students
            </p>

          </div>

          <button
            onClick={() => setShowStudentForm(!showStudentForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            {showStudentForm ? "Cancel" : "➕ Add Student"}
          </button>

        </div>


        {/* ADD STUDENT FORM */}

        {showStudentForm && (

          <form
            onSubmit={addStudent}
            className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6"
          >

            <h3 className="font-bold text-lg mb-4">
              Add New Student
            </h3>


            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Roll Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Semester"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>


            {studentError && (

              <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mt-4">
                {studentError}
              </p>

            )}


            <button
              type="submit"
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Save Student
            </button>

          </form>

        )}


        {/* STUDENT LIST */}

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b">

                <th className="py-3 px-3">
                  Name
                </th>

                <th className="py-3 px-3">
                  Roll No
                </th>

                <th className="py-3 px-3">
                  Branch
                </th>

                <th className="py-3 px-3">
                  Semester
                </th>

              </tr>

            </thead>


            <tbody>

              {students.map((student) => (

                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="py-3 px-3 font-medium">
                    {student.name}
                  </td>

                  <td className="py-3 px-3">
                    {student.rollNo}
                  </td>

                  <td className="py-3 px-3">
                    {student.branch}
                  </td>

                  <td className="py-3 px-3">
                    {student.semester}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* =========================
          REQUESTS
      ========================= */}

      <div>

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-bold">
            Student Requests
          </h2>

          <button className="text-blue-600 text-sm">
            View All
          </button>

        </div>

        <RequestTable
          requests={requests}
          updateStatus={updateStatus}
        />

      </div>


      {/* =========================
          ANALYTICS
      ========================= */}

      <div className="grid md:grid-cols-2 gap-5">

        <div className="bg-white border border-gray-200 rounded-xl p-6">

          <h2 className="font-bold text-lg">
            Recurring Issues
          </h2>

          <div className="space-y-5 mt-6">

            <div>

              <div className="flex justify-between text-sm mb-1">
                <span>Hostel Complaints</span>
                <span>45%</span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full">
                <div className="h-3 bg-blue-600 rounded-full w-[45%]"></div>
              </div>

            </div>


            <div>

              <div className="flex justify-between text-sm mb-1">
                <span>Gate Pass</span>
                <span>30%</span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full">
                <div className="h-3 bg-green-500 rounded-full w-[30%]"></div>
              </div>

            </div>


            <div>

              <div className="flex justify-between text-sm mb-1">
                <span>Fee Queries</span>
                <span>25%</span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full">
                <div className="h-3 bg-yellow-500 rounded-full w-[25%]"></div>
              </div>

            </div>

          </div>

        </div>


        {/* QUICK ACTIONS */}

        <div className="bg-slate-900 text-white rounded-xl p-6">

          <h2 className="font-bold text-lg">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-5">

            <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700">
              📢 Publish Notice
            </button>

            <button
              onClick={() => setShowStudentForm(true)}
              className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700"
            >
              👥 Manage Students
            </button>

            <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700">
              📊 Reports
            </button>

            <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700">
              ⚙️ Settings
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard