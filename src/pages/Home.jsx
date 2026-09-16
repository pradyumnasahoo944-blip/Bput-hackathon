function Home({ setRole }) {

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Navbar */}

      <nav className="flex items-center justify-between px-6 md:px-16 py-5">

        <h1 className="text-2xl font-bold text-blue-600">
          CampusConnect
        </h1>

        <div className="hidden md:flex gap-8 text-gray-600">
          <span>Features</span>
          <span>Services</span>
          <span>About</span>
        </div>

        <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
          Contact
        </button>

      </nav>


      {/* Hero */}

      <section className="px-6 md:px-16 py-20 md:py-28">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
              Smart Campus Platform
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">

              Your Campus.
              <span className="text-blue-600">
                {" "}One Platform.
              </span>

            </h2>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">

              Simplify attendance, notices, gate passes,
              leave requests, complaints and campus services
              through one unified digital platform.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button
                onClick={() => setRole("student")}
                className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                👨‍🎓 Student Portal
              </button>

              <button
                onClick={() => setRole("admin")}
                className="bg-gray-900 text-white px-7 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                👨‍💼 Admin Portal
              </button>

            </div>

          </div>


          {/* Dashboard Preview */}

          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">

            <div className="flex justify-between mb-6">

              <div>
                <p className="text-gray-500 text-sm">
                  Welcome back
                </p>

                <h3 className="text-xl font-bold">
                  Student Dashboard 👋
                </h3>
              </div>

              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                👤
              </div>

            </div>


            <div className="grid grid-cols-2 gap-4">

              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">
                  Attendance
                </p>

                <p className="text-2xl font-bold text-blue-600">
                  86%
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">
                  Requests
                </p>

                <p className="text-2xl font-bold text-green-600">
                  2
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">
                  Notices
                </p>

                <p className="text-2xl font-bold text-yellow-600">
                  5
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <p className="text-gray-500 text-sm">
                  Events
                </p>

                <p className="text-2xl font-bold text-purple-600">
                  3
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Services */}

      <section className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold">
              CAMPUS SERVICES
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Everything in one place
            </h2>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

            {[
              ["📊", "Attendance"],
              ["📅", "Timetable"],
              ["🚪", "Gate Pass"],
              ["📝", "Leave Request"],
              ["📜", "Certificates"],
              ["🏠", "Hostel"],
              ["🍱", "Mess"],
              ["💰", "Fee Queries"]
            ].map(([icon, name]) => (

              <div
                key={name}
                className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition"
              >

                <div className="text-3xl">
                  {icon}
                </div>

                <p className="font-semibold mt-3">
                  {name}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Footer */}

      <footer className="bg-slate-900 text-white text-center py-8">

        <h3 className="font-bold text-xl">
          CampusConnect
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Making everyday campus life simpler.
        </p>

      </footer>

    </div>
  )
}

export default Home