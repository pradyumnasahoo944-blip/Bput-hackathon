function Navbar({ onMenuClick }) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">

      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <div>
          <h1 className="text-xl font-bold text-blue-600">
            CampusConnect
          </h1>

          <p className="text-xs text-gray-500">
            Smart Campus Management
          </p>
        </div>

      </div>

      <div className="flex items-center gap-5">

        <button className="text-xl">
          🔔
        </button>

        <div className="flex items-center gap-2">

          <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
            P
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold">
              Pradyumna
            </p>

            <p className="text-xs text-gray-500">
              Student
            </p>
          </div>

        </div>

      </div>

    </header>
  )
}

export default Navbar