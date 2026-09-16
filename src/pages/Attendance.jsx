function Attendance() {

  const attendanceData = [
    {
      subject: "Java",
      present: 18,
      total: 20,
      percentage: 90
    },
    {
      subject: "React",
      present: 16,
      total: 20,
      percentage: 80
    },
    {
      subject: "Database",
      present: 15,
      total: 20,
      percentage: 75
    },
    {
      subject: "Mathematics",
      present: 19,
      total: 20,
      percentage: 95
    },
    {
      subject: "Spring Boot",
      present: 17,
      total: 20,
      percentage: 85
    }
  ]

  return (

    <div>

      {/* Header */}

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-gray-900">
          Attendance 📊
        </h1>

        <p className="text-gray-500 mt-1">
          Track your subject-wise attendance.
        </p>

      </div>


      {/* Overall Attendance */}

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>

            <h2 className="text-xl font-bold text-gray-800">
              Overall Attendance
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Your attendance for this semester
            </p>

          </div>


          <div className="text-center">

            <p className="text-4xl font-bold text-blue-600">
              85%
            </p>

            <p className="text-sm text-gray-500">
              Good Attendance
            </p>

          </div>

        </div>


        {/* Progress Bar */}

        <div className="mt-5">

          <div className="flex justify-between text-sm mb-2">

            <span className="text-gray-600">
              Attendance Progress
            </span>

            <span className="font-semibold text-gray-700">
              85%
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">

            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{ width: "85%" }}
            ></div>

          </div>

        </div>

      </div>


      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white rounded-xl border border-gray-200 p-5">

          <p className="text-sm text-gray-500">
            Total Classes
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-1">
            100
          </h2>

        </div>


        <div className="bg-white rounded-xl border border-gray-200 p-5">

          <p className="text-sm text-gray-500">
            Classes Present
          </p>

          <h2 className="text-2xl font-bold text-green-600 mt-1">
            85
          </h2>

        </div>


        <div className="bg-white rounded-xl border border-gray-200 p-5">

          <p className="text-sm text-gray-500">
            Classes Absent
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-1">
            15
          </h2>

        </div>

      </div>


      {/* Subject Attendance */}

      <div className="bg-white rounded-xl border border-gray-200 p-6">

        <h2 className="text-xl font-bold text-gray-800 mb-5">
          Subject-wise Attendance
        </h2>


        <div className="overflow-x-auto">

          <table className="w-full text-sm text-left">

            <thead>

              <tr className="border-b border-gray-200">

                <th className="px-4 py-3 text-gray-600">
                  Subject
                </th>

                <th className="px-4 py-3 text-gray-600">
                  Present
                </th>

                <th className="px-4 py-3 text-gray-600">
                  Total
                </th>

                <th className="px-4 py-3 text-gray-600">
                  Attendance
                </th>

                <th className="px-4 py-3 text-gray-600">
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {attendanceData.map((item) => (

                <tr
                  key={item.subject}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >

                  <td className="px-4 py-4 font-semibold text-gray-800">
                    {item.subject}
                  </td>

                  <td className="px-4 py-4">
                    {item.present}
                  </td>

                  <td className="px-4 py-4">
                    {item.total}
                  </td>

                  <td className="px-4 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-24 bg-gray-200 rounded-full h-2">

                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{
                            width: `${item.percentage}%`
                          }}
                        ></div>

                      </div>

                      <span className="font-semibold">
                        {item.percentage}%
                      </span>

                    </div>

                  </td>


                  <td className="px-4 py-4">

                    {item.percentage >= 75 ? (

                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        Good
                      </span>

                    ) : (

                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                        Low
                      </span>

                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Attendance