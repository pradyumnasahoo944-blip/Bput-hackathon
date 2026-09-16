import { useState } from "react"

function Requests({ requests, setRequests }) {

  const [type, setType] = useState("Gate Pass")
  const [reason, setReason] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!reason || !date) {
      alert("Please fill all fields")
      return
    }

    const newRequest = {
      id: Date.now(),
      student: "Pradyumna",
      type,
      reason,
      date,
      status: "Pending"
    }

    const updatedRequests = [
      ...requests,
      newRequest
    ]

    setRequests(updatedRequests)

    localStorage.setItem(
      "requests",
      JSON.stringify(updatedRequests)
    )

    setReason("")
    setDate("")

    alert("Request submitted successfully!")
  }


  return (

    <div>

      <h1 className="text-3xl font-bold">
        Requests 📝
      </h1>

      <p className="text-gray-500 mt-1 mb-6">
        Submit and track your campus requests.
      </p>


      {/* Form */}

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">

        <h2 className="text-xl font-bold mb-5">
          Submit New Request
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-3 gap-5"
        >

          <div>

            <label className="block text-sm font-medium mb-2">
              Request Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >

              <option>Gate Pass</option>
              <option>Leave Request</option>
              <option>Certificate</option>
              <option>Fee Query</option>

            </select>

          </div>


          <div>

            <label className="block text-sm font-medium mb-2">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

          </div>


          <div>

            <label className="block text-sm font-medium mb-2">
              Reason
            </label>

            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

          </div>


          <div className="md:col-span-3">

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Submit Request
            </button>

          </div>

        </form>

      </div>


      {/* Requests */}

      <div>

        <h2 className="text-xl font-bold mb-4">
          My Requests
        </h2>

        <div className="space-y-4">

          {requests
            .filter((request) => request.student === "Pradyumna")
            .map((request) => (

              <div
                key={request.id}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="font-bold text-lg">
                      {request.type}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {request.reason}
                    </p>

                    <p className="text-gray-400 text-xs mt-2">
                      Date: {request.date}
                    </p>

                  </div>

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

                </div>

              </div>

            ))}

        </div>

      </div>

    </div>
  )
}

export default Requests