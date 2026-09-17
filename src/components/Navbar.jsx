import { useNavigate } from "react-router-dom"

function Navbar({ onMenuClick }) {

  const navigate = useNavigate()

  const userEmail = localStorage.getItem("userEmail") || "user@gmail.com"
  const userRole = localStorage.getItem("userRole") || "student"


  // Get name from Gmail

  const userName = userEmail
    .split("@")[0]
    .replace(/[0-9]/g, "")
    .replace(/[._-]/g, " ")
    .trim()


  // Capitalize name

  const displayName = userName
    ? userName
        .split(" ")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ")
    : "User"


  const handleLogout = () => {

    localStorage.removeItem("userEmail")
    localStorage.removeItem("userRole")

    navigate("/")

  }


  return (

    <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">

      <div className="flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-3">

          {/* Mobile menu */}

          <button
            onClick={onMenuClick}
            className="md:hidden text-2xl"
          >
            ☰
          </button>


          <div>

            <h2 className="font-bold text-lg text-gray-900">
              CampusConnect
            </h2>

            <p className="text-xs text-gray-500">
              {userRole === "admin"
                ? "Admin Portal"
                : "Student Portal"}
            </p>

          </div>

        </div>


        {/* Right */}

        <div className="flex items-center gap-4">

          {/* User */}

          <div className="hidden sm:block text-right">

            <p className="font-semibold text-sm text-gray-900">
              {displayName}
            </p>

            <p className="text-xs text-gray-500">
              {userEmail}
            </p>

          </div>


          {/* Profile */}

          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            {displayName.charAt(0).toUpperCase()}
          </div>


          {/* Logout */}

          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:text-red-700"
          >
            Logout
          </button>

        </div>

      </div>

    </header>

  )
}

export default Navbar