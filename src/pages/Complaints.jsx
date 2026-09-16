import { useState } from "react"

function Complaints() {

  const [category, setCategory] = useState("Hostel")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!description) {
      alert("Please enter complaint details")
      return
    }

    alert("Complaint submitted successfully!")

    setDescription("")
  }

  return (

    <div>

      <h1 className="text-3xl font-bold">
        Campus Complaints 🏠
      </h1>

      <p className="text-gray-500 mt-1 mb-6">
        Report issues and track their resolution.
      </p>


      <div className="max-w-2xl bg-white border border-gray-200 rounded-xl p-6">

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block font-medium mb-2">
              Complaint Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >

              <option>Hostel</option>
              <option>Mess</option>
              <option>Classroom</option>
              <option>Library</option>
              <option>Transport</option>
              <option>Other</option>

            </select>

          </div>


          <div>

            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your problem..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            ></textarea>

          </div>


          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Complaint
          </button>

        </form>

      </div>


      {/* Example complaint */}

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-6 max-w-2xl">

        <div className="flex justify-between">

          <div>

            <h3 className="font-bold">
              Hostel Water Issue
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Complaint submitted on 12 Sept 2026
            </p>

          </div>

          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs h-fit">
            In Progress
          </span>

        </div>

      </div>

    </div>
  )
}

export default Complaints