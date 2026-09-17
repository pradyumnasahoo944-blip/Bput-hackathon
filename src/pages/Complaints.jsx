import { useEffect, useState } from "react"

function Complaints() {

  const [category, setCategory] = useState("Hostel")
  const [description, setDescription] = useState("")
  const [complaints, setComplaints] = useState(() => {

    const savedComplaints = localStorage.getItem("complaints")

    if (savedComplaints) {
      return JSON.parse(savedComplaints)
    }

    return [
      {
        id: 1,
        category: "Hostel",
        title: "Hostel Water Issue",
        description: "Water supply problem in hostel.",
        date: "12 Sept 2026",
        status: "In Progress"
      }
    ]
  })


  // Save complaints in localStorage

  useEffect(() => {

    localStorage.setItem(
      "complaints",
      JSON.stringify(complaints)
    )

  }, [complaints])


  // Submit complaint

  const handleSubmit = (e) => {

    e.preventDefault()

    if (description.trim() === "") {
      alert("Please enter complaint details")
      return
    }


    const newComplaint = {

      id: Date.now(),

      category: category,

      title: `${category} Complaint`,

      description: description,

      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }),

      status: "Pending"

    }


    setComplaints([
      newComplaint,
      ...complaints
    ])


    setDescription("")

    alert("Complaint submitted successfully!")

  }


  return (

    <div>

      {/* Header */}

      <h1 className="text-3xl font-bold">
        Campus Complaints 🏠
      </h1>

      <p className="text-gray-500 mt-1 mb-6">
        Report issues and track their resolution.
      </p>


      {/* Complaint Form */}

      <div className="max-w-2xl bg-white border border-gray-200 rounded-xl p-6">

        <h2 className="text-xl font-bold mb-5">
          Submit a Complaint
        </h2>


        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Category */}

          <div>

            <label className="block font-medium mb-2">
              Complaint Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option>Hostel</option>
              <option>Mess</option>
              <option>Classroom</option>
              <option>Library</option>
              <option>Transport</option>
              <option>Other</option>

            </select>

          </div>


          {/* Description */}

          <div>

            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your problem..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

          </div>


          {/* Submit */}

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            🚀 Submit Complaint
          </button>

        </form>

      </div>


      {/* My Complaints */}

      <div className="max-w-2xl mt-8">

        <h2 className="text-xl font-bold mb-4">
          My Complaints
        </h2>


        {complaints.length === 0 ? (

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">

            <div className="text-4xl">
              📭
            </div>

            <p className="text-gray-500 mt-2">
              You haven't submitted any complaints yet.
            </p>

          </div>

        ) : (

          <div className="space-y-4">

            {complaints.map((complaint) => (

              <div
                key={complaint.id}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >

                <div className="flex justify-between items-start gap-4">

                  <div>

                    <div className="flex items-center gap-2">

                      <span className="text-2xl">
                        {complaint.category === "Hostel"
                          ? "🏠"
                          : complaint.category === "Mess"
                          ? "🍽️"
                          : complaint.category === "Classroom"
                          ? "📚"
                          : complaint.category === "Library"
                          ? "📖"
                          : complaint.category === "Transport"
                          ? "🚌"
                          : "📌"}
                      </span>

                      <h3 className="font-bold">
                        {complaint.title}
                      </h3>

                    </div>


                    <p className="text-gray-600 text-sm mt-3">
                      {complaint.description}
                    </p>


                    <p className="text-gray-400 text-xs mt-3">
                      Submitted on {complaint.date}
                    </p>

                  </div>


                  {/* Status */}

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
                      ${
                        complaint.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : complaint.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }
                    `}
                  >
                    {complaint.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  )
}

export default Complaints