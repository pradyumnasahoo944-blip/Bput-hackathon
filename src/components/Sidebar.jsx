import { useLocation, useNavigate } from "react-router-dom"

function Sidebar({ isOpen, setIsOpen, portal }) {

  const navigate = useNavigate()
  const location = useLocation()

  // Get logged-in user
  const userEmail =
    localStorage.getItem("userEmail") || "student@gmail.com"

  const userRole =
    localStorage.getItem("userRole") || portal || "student"


  // Create display name from Gmail
  const userName = userEmail
    .split("@")[0]
    .replace(/[0-9]/g, "")
    .replace(/[._-]/g, " ")
    .trim()


  const displayName = userName
    ? userName
        .split(" ")
        .map(
          word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ")
    : "Student"


  const studentMenuItems = [
    {
      name: "Dashboard",
      icon: "🏠",
      path: "/student/dashboard"
    },
    {
      name: "Notices",
      icon: "📢",
      path: "/student/notices"
    },
    {
      name: "Timetable",
      icon: "📅",
      path: "/student/timetable"
    },
    {
      name: "Attendance",
      icon: "📊",
      path: "/student/attendance"
    },
    {
      name: "Requests",
      icon: "📝",
      path: "/student/requests"
    },
    {
      name: "Complaints",
      icon: "🏠",
      path: "/student/complaints"
    },
    {
      name: "Settings",
      icon: "⚙️",
      path: "/student/settings"
    }
  ]


  const adminMenuItems = [
    {
      name: "Dashboard",
      icon: "🏠",
      path: "/admin/dashboard"
    }
  ]


  const menuItems =
    portal === "admin"
      ? adminMenuItems
      : studentMenuItems


  const handleNavigation = (path) => {
    navigate(path)
    setIsOpen(false)
  }


  return (

    <>

      {/* Mobile Overlay */}

      {isOpen && (

        <div
          className="
            fixed
            inset-0
            bg-black/50
            z-30
            md:hidden
          "
          onClick={() => setIsOpen(false)}
        ></div>

      )}


      {/* SIDEBAR */}

      <aside
        className={`
          fixed
          md:sticky
          top-0
          left-0
          z-40

          w-72
          h-screen

          bg-slate-950
          text-white

          flex
          flex-col

          border-r
          border-slate-800

          shadow-xl

          transition-transform
          duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        {/* ========================= */}
        {/* LOGO */}
        {/* ========================= */}

        <div className="px-6 py-6 border-b border-slate-800">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-2xl">
              🎓
            </div>

            <div>

              <h2 className="text-xl font-bold">
                CampusConnect
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                {portal === "admin"
                  ? "Admin Portal"
                  : "Student Portal"}
              </p>

            </div>

          </div>

        </div>


        {/* ========================= */}
        {/* PROFILE */}
        {/* ========================= */}

        <div className="px-5 py-5 border-b border-slate-800">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
              {displayName.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0">

              <p className="font-semibold truncate">
                {displayName}
              </p>

              <p className="text-xs text-slate-400 truncate">
                {userEmail}
              </p>

            </div>

          </div>

        </div>


        {/* ========================= */}
        {/* MENU */}
        {/* ========================= */}

        <nav className="flex-1 px-4 py-6 overflow-y-auto">

          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-3">
            Main Menu
          </p>


          <div className="space-y-2">

            {menuItems.map((item) => {

              const isActive =
                location.pathname === item.path


              return (

                <button
                  key={item.name}
                  onClick={() =>
                    handleNavigation(item.path)
                  }
                  className={`
                    w-full
                    flex
                    items-center
                    gap-4

                    px-4
                    py-3.5

                    rounded-xl

                    text-left

                    transition-all
                    duration-200

                    ${
                      isActive
                        ? `
                          bg-blue-600
                          text-white
                          shadow-lg
                          shadow-blue-900/30
                        `
                        : `
                          text-slate-300
                          hover:bg-slate-800
                          hover:text-white
                        `
                    }
                  `}
                >

                  <span className="text-xl w-6 text-center">
                    {item.icon}
                  </span>

                  <span className="font-medium">
                    {item.name}
                  </span>

                  {isActive && (

                    <span className="ml-auto text-blue-200">
                      ●
                    </span>

                  )}

                </button>

              )

            })}

          </div>

        </nav>


        {/* ========================= */}
        {/* BOTTOM */}
        {/* ========================= */}

        <div className="px-5 py-5 border-t border-slate-800">

          <div className="bg-slate-900 rounded-xl p-4">

            <p className="text-xs text-slate-400">
              Logged in as
            </p>

            <p className="text-sm font-semibold mt-1">
              {userRole === "admin"
                ? "Administrator"
                : "Student"}
            </p>

          </div>

        </div>

      </aside>

    </>
  )
}

export default Sidebar