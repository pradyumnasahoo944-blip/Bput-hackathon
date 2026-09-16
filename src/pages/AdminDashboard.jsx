import StatCard from "../components/StatCard"
import RequestTable from "../components/RequestTable"

function AdminDashboard({ requests, setRequests }) {

  const pending = requests.filter(
    (request) => request.status === "Pending"
  ).length

  const approved = requests.filter(
    (request) => request.status === "Approved"
  ).length

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


  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Admin Dashboard 👨‍💼
        </h1>

        <p className="text-gray-500 mt-1">
          Monitor campus operations and student requests.
        </p>

      </div>


      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <StatCard
          title="Total Students"
          value="2,450"
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


      {/* Requests */}

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


      {/* Analytics */}

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


        {/* Quick actions */}

        <div className="bg-slate-900 text-white rounded-xl p-6">

          <h2 className="font-bold text-lg">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-3 mt-5">

            <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700">
              📢 Publish Notice
            </button>

            <button className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700">
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