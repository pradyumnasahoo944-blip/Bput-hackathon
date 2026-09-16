import NoticeCard from "../components/NoticeCard"
import { notices } from "../data/mockData"

function Notices() {

  return (

    <div>

      <div className="mb-6">

        <h1 className="text-3xl font-bold">
          Notices & Announcements 📢
        </h1>

        <p className="text-gray-500 mt-1">
          Stay updated with important campus information.
        </p>

      </div>


      <div className="grid md:grid-cols-2 gap-5">

        {notices.map((notice) => (

          <NoticeCard
            key={notice.id}
            notice={notice}
          />

        ))}

      </div>

    </div>
  )
}

export default Notices