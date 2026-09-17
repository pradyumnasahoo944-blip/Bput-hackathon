import { timetable } from "../data/mockData"

function Timetable() {

  const getPeriodText = (number) => {

    if (number === 1) return "1st Period"
    if (number === 2) return "2nd Period"
    if (number === 3) return "3rd Period"

    return `${number}th Period`
  }


  const getPeriodIcon = (number) => {

    const icons = ["📚", "💻", "🧪", "📝", "📖", "🔬"]

    return icons[number - 1] || "📘"
  }


  return (

    <div className="space-y-6">

      {/* PAGE HEADER */}

      <div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          My Timetable 📅
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Check your weekly class schedule and plan your day.
        </p>

      </div>


      {/* TODAY MESSAGE */}

      <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-2xl p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>

            <p className="text-blue-100 text-sm font-medium">
              WEEKLY SCHEDULE
            </p>

            <h2 className="text-2xl font-bold mt-1">
              Stay organised with your classes
            </h2>

            <p className="text-blue-100 mt-2">
              Check your subjects and periods before you attend your classes.
            </p>

          </div>

          <div className="text-5xl">
            🎓
          </div>

        </div>

      </div>


      {/* TIMETABLE */}

      <div className="space-y-5">

        {timetable.map((day) => (

          <div
            key={day.day}
            className="
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-700
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-md
              transition
            "
          >

            {/* DAY HEADER */}

            <div className="bg-gray-50 dark:bg-slate-700 px-5 py-4 border-b border-gray-200 dark:border-slate-600">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  📅
                </div>

                <div>

                  <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                    {day.day}
                  </h2>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Class schedule
                  </p>

                </div>

              </div>

            </div>


            {/* PERIODS */}

            <div className="p-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {day.subjects.map((subject, index) => {

                  const periodNumber = index + 1

                  return (

                    <div
                      key={index}
                      className="
                        group
                        bg-blue-50 dark:bg-slate-700
                        border border-blue-100 dark:border-slate-600
                        rounded-xl
                        p-5
                        hover:border-blue-400
                        dark:hover:border-blue-500
                        hover:shadow-md
                        transition
                      "
                    >

                      {/* ICON + PERIOD */}

                      <div className="flex items-center justify-between">

                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-xl">
                          {getPeriodIcon(periodNumber)}
                        </div>

                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {getPeriodText(periodNumber)}
                        </span>

                      </div>


                      {/* SUBJECT */}

                      <h3 className="font-bold text-gray-900 dark:text-white mt-4">
                        {subject}
                      </h3>


                      {/* CLASS INFORMATION */}

                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        📖 Regular Class
                      </p>

                    </div>

                  )

                })}

              </div>


              {/* NO SUBJECT */}

              {day.subjects.length === 0 && (

                <div className="text-center py-8">

                  <div className="text-4xl mb-2">
                    💤
                  </div>

                  <p className="text-gray-500 dark:text-gray-400">
                    No classes are scheduled for this day.
                  </p>

                </div>

              )}

            </div>

          </div>

        ))}

      </div>


      {/* FOOTER INFORMATION */}

      <div className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5">

        <div className="flex gap-3">

          <div className="text-2xl">
            💡
          </div>

          <div>

            <h3 className="font-semibold text-gray-900 dark:text-white">
              Study Tip
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Check your timetable regularly so you know which classes you have each day.
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Timetable