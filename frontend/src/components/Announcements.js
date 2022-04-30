import axios from "axios";
import { useEffect, useState } from "react";
import AnnouncementListItem from "./AnnouncementListItem";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios
      .get("/api/announcements/")
      .then((res) => setAnnouncements(res.data))
      .catch((err) => alert(err));
  }, [])

  return (
    <div>
      <h1 className="text-xl font-semibold mb-3">Announcements</h1>
      <div className="flex flex-col gap-y-3">
        {announcements.map((announcement) => (
          <AnnouncementListItem key={announcement.id} announcement={announcement} />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
