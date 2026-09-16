function StatCard({ title, value, icon, description }) {

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            {description}
          </p>

        </div>

        <div className="text-3xl bg-blue-50 p-3 rounded-xl">
          {icon}
        </div>

      </div>

    </div>
  )
}

export default StatCard