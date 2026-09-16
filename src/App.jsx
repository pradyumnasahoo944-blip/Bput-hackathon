import { useEffect, useState } from "react"

import Home from "./pages/Home"
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


function App() {

  const [role, setRole] = useState(null)

  const [activePage, setActivePage] =
    useState("Dashboard")

  const [sidebarOpen, setSidebarOpen] =
    useState(false)


  const [requests, setRequests] = useState(() => {

    const savedRequests =
      localStorage.getItem("requests")

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


  // Home page

  if (!role) {

    return (
      <Home
        setRole={setRole}
      />
    )

  }


  // Admin

  if (role === "admin") {

    return (

      <div className="min-h-screen bg-gray-50 flex">

        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        <div className="flex-1 min-w-0">

          <Navbar
            onMenuClick={() =>
              setSidebarOpen(true)
            }
          />

          <main className="p-4 md:p-8">

            <AdminDashboard
              requests={requests}
              setRequests={setRequests}
            />

          </main>

        </div>

      </div>

    )
  }


  // Student pages

  const renderPage = () => {

    switch (activePage) {

      case "Dashboard":
        return <StudentDashboard />

      case "Notices":
        return <Notices />

      case "Timetable":
        return <Timetable />

      case "Attendance":
        return <Attendance />

      case "Requests":
        return (
          <Requests
            requests={requests}
            setRequests={setRequests}
          />
        )

      case "Complaints":
        return <Complaints />

      case "Settings":
        return <Settings />

      default:
        return <StudentDashboard />

    }

  }


  return (

    <div className="min-h-screen bg-gray-50 flex">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />


      <div className="flex-1 min-w-0">

        <Navbar
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />


        <main className="p-4 md:p-8">

          {renderPage()}

        </main>

      </div>

    </div>

  )
}

export default App