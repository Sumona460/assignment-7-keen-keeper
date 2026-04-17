"use client";




import { useEffect, useState } from "react";
import { Phone, MessageSquare, Video, ArrowBigDown, ArrowDownAz, ArrowDownIcon } from "lucide-react";

const TimelinePage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");
const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  const getIcon = (type) => {
    if (type === "call") return <Phone size={18} />;
    if (type === "text") return <MessageSquare size={18} />;
    if (type === "video") return <Video size={18} />;
  };

  const getLabel = (type) => {
    if (type === "call") return "Call";
    if (type === "text") return "Text";
    if (type === "video") return "Video";
  };

// const filteredData = data.filter((item) =>
//   item.name.toLowerCase().includes(search.toLowerCase()) ||
//   item.type.toLowerCase().includes(search.toLowerCase())
// );
const filteredData = data.filter((item) => {
  if (filter === "all") return true;
  return item.type === filter;
});



  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      <div className="relative  mb-6">
  <button
    onClick={() => setOpen(!open)}
    className=" w-96 flex justify-between items-center p-3 text-gray-400 bg-white border rounded-lg shadow"
  >
    <span>
      {filter === "all"
        ? "Filter Timeline" 
        : filter.charAt(0).toUpperCase() + filter.slice(1)} 
    </span>

    <span className="text-gray-500">
        <ArrowDownIcon/>
    </span>
  </button>

  {open && (
    <div className="absolute w-55 mt-2 bg-white  rounded-lg shadow font-bold z-10">
      <div
        className="p-3 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setFilter("all");
          setOpen(false);
        }}
      >
        All
      </div>

      <div
        className="p-3 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setFilter("call");
          setOpen(false);
        }}
      >
        Call
      </div>

      <div
        className="p-3 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setFilter("text");
          setOpen(false);
        }}
      >
        Text
      </div>

      <div
        className="p-3 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setFilter("video");
          setOpen(false);
        }}
      >
        Video
      </div>
    </div>
  )}
</div>

        <div className="space-y-3">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 shadow flex items-center gap-3"
            >
              <div className="bg-base-200 p-2 rounded-full">
                {getIcon(item.type)}
              </div>

              <div>
                <p className="font-medium">
                  {getLabel(item.type)} with{" "}
                  <span className="text-green-600">{item.name}</span>
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(item.date).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TimelinePage;

