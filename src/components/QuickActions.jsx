"use client";

import { useRouter } from "next/navigation";
import { PhoneCall, MessageSquare, Video } from "lucide-react";
import toast from "react-hot-toast";

const QuickActions = ({ friend }) => {
  const router = useRouter();

  const handleAction = (type) => {
    const newItem = {
      id: Date.now(),
      type,
      name: friend.name,
      date: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("timeline")) || [];
    localStorage.setItem(
      "timeline",
      JSON.stringify([newItem, ...existing])
    );

    toast.success(`${type.toUpperCase()} logged with ${friend.name}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => handleAction("call")}
        className="btn flex flex-col h-20"
      >
        <PhoneCall size={18} />
        Call
      </button>

      <button
        onClick={() => handleAction("text")}
        className="btn flex flex-col h-20"
      >
        <MessageSquare size={18} />
        Text
      </button>

      <button
        onClick={() => handleAction("video")}
        className="btn flex flex-col h-20"
      >
        <Video size={18} />
        Video
      </button>
    </div>
  );
};

export default QuickActions;