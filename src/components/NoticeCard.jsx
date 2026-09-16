function NoticeCard({ notice }) {

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition">

      <div className="flex justify-between items-start">

        <div>

          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            {notice.type}
          </span>

          <h3 className="font-semibold text-lg mt-3">
            {notice.title}
          </h3>

        </div>

        <span className="text-xs text-gray-500">
          {notice.date}
        </span>

      </div>

      <p className="text-gray-600 text-sm mt-3">
        {notice.description}
      </p>

      <button className="text-blue-600 text-sm font-medium mt-4">
        Read more →
      </button>

    </div>
  )
}

export default NoticeCard