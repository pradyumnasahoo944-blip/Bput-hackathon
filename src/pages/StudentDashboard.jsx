import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function StudentDashboard() {

  const navigate = useNavigate()

  // ==============================
  // USER INFORMATION
  // ==============================

  const userEmail =
    localStorage.getItem("userEmail") || "student@gmail.com"

  const getUserName = () => {

    const name = userEmail
      .split("@")[0]
      .replace(/[0-9]/g, "")
      .replace(/[._-]/g, " ")
      .trim()

    if (!name) {
      return "Student"
    }

    return name
      .split(" ")
      .map(
        word =>
          word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ")
  }

  const userName = getUserName()


  // ==============================
  // ATTENDANCE
  // ==============================

  const [attendance, setAttendance] = useState(() => {

    const savedAttendance =
      localStorage.getItem("attendance")

    return savedAttendance
      ? Number(savedAttendance)
      : 86
  })


  // ==============================
  // REQUESTS
  // ==============================

  const [requests, setRequests] = useState(() => {

    const savedRequests =
      localStorage.getItem("requests")

    return savedRequests
      ? JSON.parse(savedRequests)
      : []
  })


  // ==============================
  // NOTICES
  // ==============================

  const [notices, setNotices] = useState(() => {

    const savedNotices =
      localStorage.getItem("notices")

    if (savedNotices) {
      return JSON.parse(savedNotices)
    }

    return [
      {
        id: 1,
        title: "Annual Sports Day",
        description:
          "Annual Sports Day will be conducted at the college ground.",
        date: "20 September 2026",
        type: "Event"
      },
      {
        id: 2,
        title: "Internal Examination",
        description:
          "Internal examinations will begin from next week.",
        date: "25 September 2026",
        type: "Academic"
      },
      {
        id: 3,
        title: "Campus Maintenance",
        description:
          "Maintenance work will be carried out in Block A.",
        date: "22 September 2026",
        type: "General"
      }
    ]
  })


  // ==============================
  // EVENTS
  // ==============================

  const [events, setEvents] = useState(() => {

    const savedEvents =
      localStorage.getItem("events")

    if (savedEvents) {
      return JSON.parse(savedEvents)
    }

    return [
      {
        id: 1,
        title: "Annual Sports Day",
        date: "20 September 2026",
        location: "College Ground"
      },
      {
        id: 2,
        title: "Tech Fest",
        date: "28 September 2026",
        location: "Main Auditorium"
      }
    ]
  })


  // ==============================
  // TIMETABLE
  // ==============================

  const [classes, setClasses] = useState(() => {

    const savedClasses =
      localStorage.getItem("classes")

    if (savedClasses) {
      return JSON.parse(savedClasses)
    }

    return [
      {
        id: 1,
        subject: "Java Programming",
        time: "10:00 AM",
        room: "Room 204"
      },
      {
        id: 2,
        subject: "Database Management",
        time: "12:00 PM",
        room: "Room 105"
      },
      {
        id: 3,
        subject: "Web Technology",
        time: "2:00 PM",
        room: "Lab 2"
      }
    ]
  })


  // ==============================
  // SAVE DATA
  // ==============================

  useEffect(() => {

    localStorage.setItem(
      "attendance",
      attendance
    )

  }, [attendance])


  useEffect(() => {

    localStorage.setItem(
      "requests",
      JSON.stringify(requests)
    )

  }, [requests])


  useEffect(() => {

    localStorage.setItem(
      "notices",
      JSON.stringify(notices)
    )

  }, [notices])


  useEffect(() => {

    localStorage.setItem(
      "events",
      JSON.stringify(events)
    )

  }, [events])


  useEffect(() => {

    localStorage.setItem(
      "classes",
      JSON.stringify(classes)
    )

  }, [classes])


  // ==============================
  // DYNAMIC COUNTS
  // ==============================

  const pendingRequests = requests.filter(
    request => request.status === "Pending"
  ).length


  const unreadNotices = notices.length


  const upcomingEvents = events.length


  const nextClass =
    classes.length > 0
      ? classes[0]
      : null


  const latestNotices =
    notices.slice(0, 2)


  const recentRequests =
    requests.slice(0, 3)


  // ==============================
  // QUICK SERVICE
  // ==============================

  const quickServices = [

    {
      icon: "🚪",
      title: "Gate Pass",
      path: "/student/requests"
    },

    {
      icon: "📝",
      title: "Leave Request",
      path: "/student/requests"
    },

    {
      icon: "📜",
      title: "Certificate",
      path: "/student/requests"
    },

    {
      icon: "🏠",
      title: "Complaint",
      path: "/student/complaints"
    }

  ]


  // ==============================
  // STATUS COLOR
  // ==============================

  const getStatusStyle = (status) => {

    if (status === "Approved") {

      return "bg-green-100 text-green-700"

    }

    if (status === "Rejected") {

      return "bg-red-100 text-red-700"

    }

    if (status === "In Progress") {

      return "bg-blue-100 text-blue-700"

    }

    return "bg-yellow-100 text-yellow-700"
  }


  return (

    <div className="space-y-8">


      {/* ================================= */}
      {/* WELCOME */}
      {/* ================================= */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6">

        <p className="text-blue-100 text-sm">
          STUDENT DASHBOARD
        </p>

        <h1 className="text-3xl font-bold mt-2">
          Welcome, {userName} 👋
        </h1>

        <p className="text-blue-100 mt-2">
          Here's what's happening on your campus today.
        </p>

        <p className="text-blue-200 text-sm mt-3">
          {userEmail}
        </p>

      </div>



      {/* ================================= */}
      {/* TODAY HIGHLIGHTS */}
      {/* ================================= */}

      <div>

        <h2 className="text-xl font-bold mb-4">
          Today's Highlights
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


          {/* NEXT CLASS */}

          <button
            onClick={() => navigate("/student/timetable")}
            className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:shadow-lg transition"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Next Class
                </p>

                <h3 className="text-lg font-bold mt-1">
                  {nextClass
                    ? nextClass.subject
                    : "No classes"}
                </h3>

              </div>

              <span className="text-3xl">
                📚
              </span>

            </div>


            {nextClass && (

              <div className="mt-4 text-sm text-gray-500">

                <p>
                  🕐 {nextClass.time}
                </p>

                <p>
                  📍 {nextClass.room}
                </p>

              </div>

            )}

          </button>



          {/* ATTENDANCE */}

          <button
            onClick={() => navigate("/student/attendance")}
            className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:shadow-lg transition"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Overall Attendance
                </p>

                <h3 className="text-3xl font-bold text-blue-600 mt-1">
                  {attendance}%
                </h3>

              </div>

              <span className="text-3xl">
                📊
              </span>

            </div>


            <div className="mt-4">

              <div className="w-full bg-gray-200 rounded-full h-2">

                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{
                    width: `${attendance}%`
                  }}
                ></div>

              </div>

            </div>

          </button>



          {/* EVENTS */}

          <button
            onClick={() => navigate("/student/notices")}
            className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:shadow-lg transition"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Upcoming Event
                </p>

                <h3 className="text-lg font-bold mt-1">
                  {events.length > 0
                    ? events[0].title
                    : "No events"}
                </h3>

              </div>

              <span className="text-3xl">
                📅
              </span>

            </div>


            {events.length > 0 && (

              <div className="mt-4 text-sm text-gray-500">

                <p>
                  📅 {events[0].date}
                </p>

                <p>
                  📍 {events[0].location}
                </p>

              </div>

            )}

          </button>

        </div>

      </div>



      {/* ================================= */}
      {/* STATISTICS */}
      {/* ================================= */}

      <div>

        <h2 className="text-xl font-bold mb-4">
          My Overview
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


          <div className="bg-white border border-gray-200 rounded-xl p-5">

            <p className="text-gray-500 text-sm">
              Attendance
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {attendance}%
            </h2>

            <p className="text-green-600 text-sm mt-2">
              Overall attendance
            </p>

          </div>



          <div className="bg-white border border-gray-200 rounded-xl p-5">

            <p className="text-gray-500 text-sm">
              Pending Requests
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {pendingRequests}
            </h2>

            <p className="text-yellow-600 text-sm mt-2">
              Awaiting approval
            </p>

          </div>



          <div className="bg-white border border-gray-200 rounded-xl p-5">

            <p className="text-gray-500 text-sm">
              Notices
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {unreadNotices}
            </h2>

            <p className="text-blue-600 text-sm mt-2">
              Available notices
            </p>

          </div>



          <div className="bg-white border border-gray-200 rounded-xl p-5">

            <p className="text-gray-500 text-sm">
              Upcoming Events
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {upcomingEvents}
            </h2>

            <p className="text-purple-600 text-sm mt-2">
              Campus events
            </p>

          </div>

        </div>

      </div>



      {/* ================================= */}
      {/* QUICK SERVICES */}
      {/* ================================= */}

      <div>

        <h2 className="text-xl font-bold mb-4">
          Quick Services
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {quickServices.map((service) => (

            <button
              key={service.title}
              onClick={() => navigate(service.path)}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-400 transition"
            >

              <div className="text-3xl">
                {service.icon}
              </div>

              <h3 className="font-semibold mt-3">
                {service.title}
              </h3>

              <p className="text-gray-500 text-xs mt-1">
                Click to continue →
              </p>

            </button>

          ))}

        </div>

      </div>



      {/* ================================= */}
      {/* LATEST NOTICES */}
      {/* ================================= */}

      <div>

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-bold">
            Latest Notices
          </h2>

          <button
            onClick={() => navigate("/student/notices")}
            className="text-blue-600 text-sm hover:underline"
          >
            View all →
          </button>

        </div>


        <div className="grid md:grid-cols-2 gap-4">

          {latestNotices.map((notice) => (

            <button
              key={notice.id}
              onClick={() => navigate("/student/notices")}
              className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:shadow-md transition"
            >

              <div className="flex justify-between">

                <h3 className="font-bold">
                  {notice.title}
                </h3>

                <span className="text-xl">
                  📢
                </span>

              </div>


              <p className="text-gray-500 text-sm mt-2">
                {notice.description}
              </p>


              <div className="flex justify-between mt-4">

                <span className="text-xs text-blue-600">
                  {notice.type}
                </span>

                <span className="text-xs text-gray-400">
                  {notice.date}
                </span>

              </div>

            </button>

          ))}


          {latestNotices.length === 0 && (

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-gray-500">
              No notices available.
            </div>

          )}

        </div>

      </div>



      {/* ================================= */}
      {/* RECENT REQUESTS */}
      {/* ================================= */}

      <div>

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-bold">
            Recent Requests
          </h2>

          <button
            onClick={() => navigate("/student/requests")}
            className="text-blue-600 text-sm hover:underline"
          >
            View all →
          </button>

        </div>


        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">


          {recentRequests.length > 0 ? (

            <div className="divide-y">

              {recentRequests.map((request) => (

                <div
                  key={request.id}
                  className="p-5 flex justify-between items-center"
                >

                  <div>

                    <h3 className="font-semibold">
                      {request.type}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {request.reason}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {request.date}
                    </p>

                  </div>


                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>

                </div>

              ))}

            </div>

          ) : (

            <div className="p-8 text-center text-gray-500">

              <div className="text-4xl mb-3">
                📝
              </div>

              <p>
                You don't have any requests yet.
              </p>

              <button
                onClick={() => navigate("/student/requests")}
                className="mt-3 text-blue-600 hover:underline"
              >
                Create your first request →
              </button>

            </div>

          )}

        </div>

      </div>



      {/* ================================= */}
      {/* UPCOMING EVENT */}
      {/* ================================= */}

      {events.length > 0 && (

        <div className="bg-slate-900 text-white rounded-2xl p-6">

          <div className="flex flex-col md:flex-row justify-between gap-5">

            <div>

              <p className="text-blue-400 text-sm font-semibold">
                UPCOMING CAMPUS EVENT
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {events[0].title} 🎉
              </h2>

              <p className="text-gray-300 mt-2">
                📅 {events[0].date}
              </p>

              <p className="text-gray-300 mt-1">
                📍 {events[0].location}
              </p>

            </div>


            <button
              onClick={() => navigate("/student/notices")}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold h-fit"
            >
              View Details →
            </button>

          </div>

        </div>

      )}

    </div>
  )
}

export default StudentDashboard