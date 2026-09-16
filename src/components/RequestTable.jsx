function RequestTable({ requests, updateStatus }) {

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left px-5 py-4">
                Student
              </th>

              <th className="text-left px-5 py-4">
                Type
              </th>

              <th className="text-left px-5 py-4">
                Date
              </th>

              <th className="text-left px-5 py-4">
                Status
              </th>

              <th className="text-left px-5 py-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {requests.map((request) => (

              <tr
                key={request.id}
                className="border-t border-gray-100"
              >

                <td className="px-5 py-4 font-medium">
                  {request.student}
                </td>

                <td className="px-5 py-4">
                  {request.type}
                </td>

                <td className="px-5 py-4">
                  {request.date}
                </td>

                <td className="px-5 py-4">

                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs
                      ${
                        request.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : request.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {request.status}
                  </span>

                </td>

                <td className="px-5 py-4">

                  {request.status === "Pending" && (

                    <div className="flex gap-2">

                      <button
                        onClick={() =>
                          updateStatus(request.id, "Approved")
                        }
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(request.id, "Rejected")
                        }
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      >
                        Reject
                      </button>

                    </div>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default RequestTable