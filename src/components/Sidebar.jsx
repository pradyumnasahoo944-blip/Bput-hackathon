function Sidebar({ activePage, setActivePage, isOpen, setIsOpen }) {

  const menuItems = [
    { name: "Dashboard", icon: "🏠" },
    { name: "Notices", icon: "📢" },
    { name: "Timetable", icon: "📅" },
    { name: "Attendance", icon: "📊" },
    { name: "Requests", icon: "📝" },
    { name: "Complaints", icon: "🏠" },
    { name: "Settings", icon: "⚙️" }
  ]

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        className={`
          fixed md:static
          z-40
          top-0 left-0
          h-full
          w-64
          bg-slate-900
          text-white
          p-5
          transition-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >

        <div className="mb-8">

          <h2 className="text-2xl font-bold text-blue-400">
            CampusConnect
          </h2>

          <p className="text-gray-400 text-sm">
            Student Portal
          </p>

        </div>

        <nav className="space-y-2">

          {menuItems.map((item) => (

            <button
              key={item.name}
              onClick={() => {
                setActivePage(item.name)
                setIsOpen(false)
              }}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                text-left
                transition
                ${
                  activePage === item.name
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }
              `}
            >

              <span>{item.icon}</span>

              <span>{item.name}</span>

            </button>

          ))}

        </nav>

      </aside>
    </>
  )
}

export default Sidebar