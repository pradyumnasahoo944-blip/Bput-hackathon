import { useEffect, useState } from "react"

function Settings() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"
  })


  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    localStorage.setItem("darkMode", darkMode)

  }, [darkMode])


  return (
    <div className="min-h-screen">

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Settings ⚙️
      </h1>

      <p className="text-gray-500 dark:text-gray-400 mt-1 mb-6">
        Customize your CampusConnect experience.
      </p>


      <div className="max-w-2xl">

        {/* DARK MODE */}

        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                🌙 Dark Mode
              </h2>

              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Turn dark mode on or off.
              </p>

            </div>


            {/* SWITCH */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-14 h-7 rounded-full p-1 transition ${
                darkMode
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
            >

              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  darkMode
                    ? "translate-x-7"
                    : "translate-x-0"
                }`}
              ></div>

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Settings