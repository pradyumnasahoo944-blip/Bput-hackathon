import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  const services = [
    ["📊", "Attendance", "Track attendance and stay updated with your academic progress."],
    ["📅", "Timetable", "View your daily class schedule in one convenient place."],
    ["🚪", "Gate Pass", "Submit and track gate pass requests digitally."],
    ["📝", "Leave Request", "Apply for leave without paperwork or long queues."],
    ["📜", "Certificates", "Request and manage important campus certificates."],
    ["🏠", "Hostel", "Report hostel issues and track their resolution."],
    ["🍱", "Mess", "Check mess services and share feedback easily."],
    ["💰", "Fee Queries", "Get information and raise queries about fees."]
  ]

  const steps = [
    ["01", "Login", "Choose your Student or Admin portal and access your dashboard."],
    ["02", "Manage", "Use digital campus services from one centralized platform."],
    ["03", "Track", "Monitor requests, notices, complaints and important updates."]
  ]

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
              CC
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              Campus<span className="text-blue-600">Connect</span>
            </h1>

          </div>


          <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

            <a
              href="#features"
              className="hover:text-blue-600 transition"
            >
              Features
            </a>

            <a
              href="#services"
              className="hover:text-blue-600 transition"
            >
              Services
            </a>

            <a
              href="#how-it-works"
              className="hover:text-blue-600 transition"
            >
              How It Works
            </a>

            <a
              href="#about"
              className="hover:text-blue-600 transition"
            >
              About
            </a>

          </div>


          <button
            onClick={() => navigate("/login/student")}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            Get Started
          </button>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="px-6 md:px-10 py-20 md:py-28">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Smart Campus Platform
            </span>


            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">

              Your Campus.

              <span className="text-blue-600">
                {" "}One Platform.
              </span>

            </h2>


            <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-xl">

              CampusConnect brings everyday campus services together
              in one simple digital platform. Manage attendance,
              notices, requests, complaints and more — without
              unnecessary paperwork.

            </p>


            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              {/* STUDENT */}

              <button
                onClick={() => navigate("/login/student")}
                className="bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition"
              >
                👨‍🎓 Student Portal →
              </button>


              {/* ADMIN */}

              <button
                onClick={() => navigate("/login/admin")}
                className="bg-gray-900 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-800 hover:shadow-lg transition"
              >
                👨‍💼 Admin Portal →
              </button>

            </div>


            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-500">

              <span>✓ Easy to use</span>
              <span>✓ Centralized services</span>
              <span>✓ Student friendly</span>

            </div>

          </div>


          {/* RIGHT - DASHBOARD PREVIEW */}

          <div className="relative">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50">
            </div>

            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-50">
            </div>


            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">

              {/* Dashboard Header */}

              <div className="flex items-center justify-between mb-6">

                <div>

                  <p className="text-gray-500 text-sm">
                    Welcome back 👋
                  </p>

                  <h3 className="text-xl font-bold text-gray-900">
                    Student Dashboard
                  </h3>

                </div>


                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                  👤
                </div>

              </div>


              {/* Stats */}

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-blue-50 p-5 rounded-2xl">

                  <p className="text-gray-500 text-sm">
                    Attendance
                  </p>

                  <p className="text-3xl font-bold text-blue-600 mt-1">
                    86%
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Good progress
                  </p>

                </div>


                <div className="bg-green-50 p-5 rounded-2xl">

                  <p className="text-gray-500 text-sm">
                    Requests
                  </p>

                  <p className="text-3xl font-bold text-green-600 mt-1">
                    2
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Pending
                  </p>

                </div>


                <div className="bg-yellow-50 p-5 rounded-2xl">

                  <p className="text-gray-500 text-sm">
                    Notices
                  </p>

                  <p className="text-3xl font-bold text-yellow-600 mt-1">
                    5
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    New updates
                  </p>

                </div>


                <div className="bg-purple-50 p-5 rounded-2xl">

                  <p className="text-gray-500 text-sm">
                    Events
                  </p>

                  <p className="text-3xl font-bold text-purple-600 mt-1">
                    3
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Upcoming
                  </p>

                </div>

              </div>


              {/* Recent Activity */}

              <div className="mt-6 border-t pt-5">

                <div className="flex justify-between items-center">

                  <h4 className="font-semibold text-gray-900">
                    Recent Activity
                  </h4>

                  <span className="text-blue-600 text-sm">
                    View all
                  </span>

                </div>


                <div className="mt-4 space-y-3">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                      ✓
                    </div>

                    <div>

                      <p className="text-sm font-medium">
                        Gate pass submitted
                      </p>

                      <p className="text-xs text-gray-500">
                        Just now
                      </p>

                    </div>

                  </div>


                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                      📢
                    </div>

                    <div>

                      <p className="text-sm font-medium">
                        New campus notice
                      </p>

                      <p className="text-xs text-gray-500">
                        2 hours ago
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="bg-white py-20 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-blue-600 font-bold text-sm tracking-wider">
              WHY CAMPUSCONNECT?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              A smarter way to manage campus life
            </h2>

            <p className="text-gray-600 mt-4">
              Replace disconnected processes with one centralized
              platform designed for students and administrators.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="p-7 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-lg transition">

              <div className="text-4xl">
                ⚡
              </div>

              <h3 className="text-xl font-bold mt-4">
                Simple & Fast
              </h3>

              <p className="text-gray-600 mt-2">
                Access important campus services without unnecessary
                paperwork or complicated processes.
              </p>

            </div>


            <div className="p-7 rounded-2xl bg-indigo-50 border border-indigo-100 hover:shadow-lg transition">

              <div className="text-4xl">
                🔔
              </div>

              <h3 className="text-xl font-bold mt-4">
                Stay Updated
              </h3>

              <p className="text-gray-600 mt-2">
                Keep track of notices, timetable changes, requests
                and other important campus updates.
              </p>

            </div>


            <div className="p-7 rounded-2xl bg-green-50 border border-green-100 hover:shadow-lg transition">

              <div className="text-4xl">
                📱
              </div>

              <h3 className="text-xl font-bold mt-4">
                Accessible Anywhere
              </h3>

              <p className="text-gray-600 mt-2">
                A responsive interface designed to work across
                phones, tablets and computers.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="py-20 px-6 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-bold text-sm">
              CAMPUS SERVICES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Everything in one place
            </h2>

            <p className="text-gray-600 mt-4">
              One platform for the services students use every day.
            </p>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

            {services.map(([icon, name, description]) => (

              <div
                key={name}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300"
              >

                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
                  {icon}
                </div>

                <h3 className="font-bold text-lg mt-4">
                  {name}
                </h3>

                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how-it-works"
        className="py-20 px-6 bg-white"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-bold text-sm">
              HOW IT WORKS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Three simple steps
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {steps.map(([number, title, description]) => (

              <div
                key={number}
                className="text-center"
              >

                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  {number}
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= STUDENT / ADMIN ================= */}

      <section
        id="about"
        className="py-20 px-6 bg-gray-50"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* STUDENT */}

          <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-10">

            <div className="text-4xl">
              👨‍🎓
            </div>

            <h2 className="text-2xl font-bold mt-5">
              For Students
            </h2>

            <ul className="mt-5 space-y-3 text-blue-50">

              <li>✓ View attendance and timetable</li>
              <li>✓ Submit leave and gate pass requests</li>
              <li>✓ Track complaints</li>
              <li>✓ Read important notices</li>
              <li>✓ Access campus services</li>

            </ul>


            <button
              onClick={() => navigate("/login/student")}
              className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Open Student Portal →
            </button>

          </div>


          {/* ADMIN */}

          <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-10">

            <div className="text-4xl">
              👨‍💼
            </div>

            <h2 className="text-2xl font-bold mt-5">
              For Administrators
            </h2>

            <ul className="mt-5 space-y-3 text-gray-300">

              <li>✓ Manage campus notices</li>
              <li>✓ Review student requests</li>
              <li>✓ Monitor complaints</li>
              <li>✓ Track pending activities</li>
              <li>✓ Get better campus visibility</li>

            </ul>


            <button
              onClick={() => navigate("/login/admin")}
              className="mt-8 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Open Admin Portal →
            </button>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to simplify campus life?
          </h2>

          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            Access your campus services from one centralized platform.
          </p>


          <button
            onClick={() => navigate("/login/student")}
            className="mt-8 bg-white text-blue-600 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition"
          >
            Get Started →
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold">
                  CC
                </div>

                <h3 className="text-xl font-bold">
                  CampusConnect
                </h3>

              </div>

              <p className="text-gray-400 mt-4 max-w-sm">
                A unified digital platform designed to make everyday
                campus life simpler for students and administrators.
              </p>

            </div>


            <div>

              <h4 className="font-semibold">
                Platform
              </h4>

              <div className="space-y-2 mt-4 text-gray-400 text-sm">

                <p>Student Portal</p>
                <p>Admin Portal</p>
                <p>Campus Services</p>

              </div>

            </div>


            <div>

              <h4 className="font-semibold">
                Quick Links
              </h4>

              <div className="space-y-2 mt-4 text-gray-400 text-sm">

                <p>Features</p>
                <p>Services</p>
                <p>About</p>

              </div>

            </div>

          </div>


          <div className="border-t border-gray-800 mt-10 pt-6 text-center">

            <p className="text-gray-500 text-sm">
              © 2026 CampusConnect. Built for smarter campus life.
            </p>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default Home