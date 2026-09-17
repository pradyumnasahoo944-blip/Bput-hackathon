import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login({ selectedRole }) {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const handleLogin = (e) => {

    e.preventDefault()

    setError("")


    // Check email

    if (email.trim() === "") {
      setError("Please enter your Gmail")
      return
    }


    // Check password

    if (password.trim() === "") {
      setError("Please enter your password")
      return
    }


    // Check Gmail

    if (!email.toLowerCase().endsWith("@gmail.com")) {
      setError("Please enter a valid Gmail address")
      return
    }


    // Save login information

    localStorage.setItem("userEmail", email)
    localStorage.setItem("userRole", selectedRole)


    // Navigate according to role

    if (selectedRole === "student") {

      navigate("/student/dashboard")

    } else {

      navigate("/admin/dashboard")

    }

  }


  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Logo */}

        <div className="text-center mb-8">

          <div className="text-5xl mb-3">
            🎓
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            CampusConnect
          </h1>

          <p className="text-gray-500 mt-2">
            {selectedRole === "admin"
              ? "Admin Login"
              : "Student Login"}
          </p>

        </div>


        {/* Form */}

        <form onSubmit={handleLogin}>

          {/* Gmail */}

          <div className="mb-5">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Gmail
            </label>

            <input
              type="email"
              placeholder="Enter your Gmail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


          {/* Password */}

          <div className="mb-5">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError("")
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


          {/* Error */}

          {error && (

            <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 mb-5">
              {error}
            </div>

          )}


          {/* Login */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Login as {selectedRole === "admin" ? "Admin" : "Student"}
          </button>

        </form>


        {/* Back */}

        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 text-gray-600 hover:text-blue-600"
        >
          ← Back to Home
        </button>

      </div>

    </div>

  )
}

export default Login