import { useState } from "react"

function Settings() {

  const [lowData, setLowData] = useState(false)
  const [language, setLanguage] = useState("English")

  return (

    <div>

      <h1 className="text-3xl font-bold">
        Settings ⚙️
      </h1>

      <p className="text-gray-500 mt-1 mb-6">
        Customize your CampusConnect experience.
      </p>


      <div className="max-w-2xl space-y-5">


        {/* Language */}

        <div className="bg-white border border-gray-200 rounded-xl p-6">

          <h2 className="font-bold text-lg">
            🌐 Language
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Choose your preferred language.
          </p>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-4 border border-gray-300 rounded-lg px-4 py-3 w-full"
          >

            <option>English</option>
            <option>ଓଡ଼ିଆ</option>
            <option>हिन्दी</option>

          </select>

        </div>


        {/* Low Data */}

        <div className="bg-white border border-gray-200 rounded-xl p-6">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="font-bold text-lg">
                ⚡ Low Data Mode
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Reduce data usage on slower networks.
              </p>

            </div>

            <button
              onClick={() => setLowData(!lowData)}
              className={`
                w-14 h-7 rounded-full p-1 transition
                ${lowData ? "bg-blue-600" : "bg-gray-300"}
              `}
            >

              <div
                className={`
                  bg-white w-5 h-5 rounded-full transition
                  ${lowData ? "translate-x-7" : ""}
                `}
              ></div>

            </button>

          </div>

        </div>


        {/* Offline */}

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">

          <h2 className="font-bold">
            📴 Offline Support
          </h2>

          <p className="text-gray-600 text-sm mt-2">
            Important information such as timetable,
            emergency contacts and previously loaded notices
            can remain available when you lose internet access.
          </p>

          <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
            Offline Ready
          </span>

        </div>

      </div>

    </div>
  )
}

export default Settings