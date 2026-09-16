import { timetable } from "../data/mockData"

function Timetable() {

  return (

    <div>

      <h1 className="text-3xl font-bold">
        Timetable 📅
      </h1>

      <p className="text-gray-500 mt-1 mb-6">
        Your weekly class schedule.
      </p>


      <div className="grid gap-4">

        {timetable.map((day) => (

          <div
            key={day.day}
            className="bg-white rounded-xl border border-gray-200 p-5"
          >

            <h2 className="font-bold text-lg mb-4">
              {day.day}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

              {day.subjects.map((subject, index) => (

                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg"
                >

                  <p className="text-xs text-gray-500">
                    {index + 1}st Period
                  </p>

                  <p className="font-semibold text-blue-700 mt-1">
                    {subject}
                  </p>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Timetable