import StatCard from "../components/StatCard"
import NoticeCard from "../components/NoticeCard"
import { notices } from "../data/mockData"

function StudentDashboard() {

  return (

    <div className="space-y-8">

      {/* Welcome */}

      <div>

        <h1 className="text-3xl font-bold text-gray-900">
          Good Evening, Pradyumna 👋
        </h1>

        <p className="text-gray-500 mt-1">
          Here's what's happening on your campus today.
        </p>

      </div>


      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <StatCard
          title="Attendance"
          value="86%"
          icon="📊"
          description="Overall attendance"
        />

        <StatCard
          title="Pending Requests"
          value="2"
          icon="📝"
          description="Awaiting approval"
        />

        <StatCard
          title="New Notices"
          value="5"
          icon="📢"
          description="Unread notices"
        />

        <StatCard
          title="Upcoming Events"
          value="3"
          icon="📅"
          description="This month"
        />

      </div>


      {/* Quick Services */}

      <div>

        <h2 className="text-xl font-bold mb-4">
          Quick Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {[
            ["🚪", "Gate Pass"],
            ["📝", "Leave Request"],
            ["📜", "Certificate"],
            ["🏠", "Complaint"]
          ].map(([icon, title]) => (

            <button
              key={title}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition text-left"
            >

              <div className="text-3xl">
                {icon}
              </div>

              <p className="font-semibold mt-3">
                {title}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Apply now →
              </p>

            </button>

          ))}

        </div>

      </div>


      {/* Notices */}

      <div>

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-bold">
            Latest Notices
          </h2>

          <button className="text-blue-600 text-sm">
            View all →
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-4">

          {notices.slice(0, 2).map((notice) => (

            <NoticeCard
              key={notice.id}
              notice={notice}
            />

          ))}

        </div>

      </div>


      {/* Upcoming */}

      <div className="bg-blue-600 text-white rounded-2xl p-6">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-blue-100 text-sm">
              NEXT EVENT
            </p>

            <h2 className="text-2xl font-bold mt-1">
              Annual Sports Day 🏃
            </h2>

            <p className="text-blue-100 mt-2">
              20 September 2026 • College Ground
            </p>

          </div>

          <span className="text-5xl hidden sm:block">
            🏆
          </span>

        </div>

      </div>

    </div>
  )
}

export default StudentDashboard