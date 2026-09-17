import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"

import StudentDashboard from "./pages/StudentDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import Notices from "./pages/Notices"
import Timetable from "./pages/Timetable"
import Attendance from "./pages/Attendance"
import Requests from "./pages/Requests"
import Complaints from "./pages/Complaints"
import Settings from "./pages/Settings"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"


function StudentLayout({ requests, setRequests }) {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        portal="student"
      />

      <div className="flex-1 min-w-0">

        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="p-4 md:p-8">

          <Routes>

            <Route
              path="dashboard"
              element={<StudentDashboard />}
            />

            <Route
              path="notices"
              element={<Notices />}
            />

            <Route
              path="timetable"
              element={<Timetable />}
            />

            <Route
              path="attendance"
              element={<Attendance />}
            />

            <Route
              path="requests"
              element={
                <Requests
                  requests={requests}
                  setRequests={setRequests}
                />
              }
            />

            <Route
              path="complaints"
              element={<Complaints />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />

            <Route
              path="*"
              element={<Navigate to="/student/dashboard" replace />}
            />

          </Routes>

        </main>

      </div>

    </div>
  )
}


function AdminLayout({ requests, setRequests }) {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        portal="admin"
      />

      <div className="flex-1 min-w-0">

        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="p-4 md:p-8">

          <Routes>

            <Route
              path="dashboard"
              element={
                <AdminDashboard
                  requests={requests}
                  setRequests={setRequests}
                />
              }
            />

            <Route
              path="*"
              element={<Navigate to="/admin/dashboard" replace />}
            />

          </Routes>

        </main>

      </div>

    </div>
  )
}


function App() {

  const [requests, setRequests] = useState(() => {

    const savedRequests = localStorage.getItem("requests")

    if (savedRequests) {
      return JSON.parse(savedRequests)
    }

    return [
      {
        id: 1,
        student: "Rahul",
        type: "Gate Pass",
        reason: "Family function",
        date: "15 Sep 2026",
        status: "Pending"
      },
      {
        id: 2,
        student: "Priya",
        type: "Certificate",
        reason: "Need bonafide certificate",
        date: "14 Sep 2026",
        status: "Approved"
      },
      {
        id: 3,
        student: "Amit",
        type: "Leave Request",
        reason: "Medical leave",
        date: "14 Sep 2026",
        status: "Pending"
      }
    ]
  })


  useEffect(() => {

    localStorage.setItem(
      "requests",
      JSON.stringify(requests)
    )

  }, [requests])


  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* LOGIN */}

        <Route
          path="/login/student"
          element={
            <Login
              selectedRole="student"
            />
          }
        />

        <Route
          path="/login/admin"
          element={
            <Login
              selectedRole="admin"
            />
          }
        />


        {/* STUDENT */}

        <Route
          path="/student/*"
          element={
            <StudentLayout
              requests={requests}
              setRequests={setRequests}
            />
          }
        />


        {/* ADMIN */}

        <Route
          path="/admin/*"
          element={
            <AdminLayout
              requests={requests}
              setRequests={setRequests}
            />
          }
        />


        {/* UNKNOWN URL */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>

  )
}


export default App