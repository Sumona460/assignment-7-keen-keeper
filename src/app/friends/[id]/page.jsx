import { Archive, BellMinus, MessageSquare, Phone, Trash2, Video } from "lucide-react";
import Image from "next/image";

const FriendDetails = async ({ params }) => {

   const { id } = await params; 
   
  const res = await fetch("http://localhost:3000/friends.json", {
    cache: "no-store",
  });

  const friends = await res.json();

  

  const friend = friends.find(f=> String(f.id)=== String(id))

//   console.log("params.id:", params.id);
// console.log("friends:", friends);

// console.log("params.id:", params.id);
// console.log("friends ids:", friends.map(f => f.id));


  if (!friend) {
    return <p className="p-10">Friend not found</p>;
  }

  return (
        <div className="min-h-screen bg-base-200 p-6 pt-15">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

<div className="space-y-4">

 {/* LEFT CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={90}
            height={90}
            className="rounded-full mx-auto mb-3"
          />

          <h2 className="text-xl font-bold">{friend.name}</h2>

          <span className="badge badge-error text-white mt-2">
            {friend.status}
          </span>

          <div className="mt-2">
            {friend.tags.map((tag, i) => (
              <span key={i} className="badge badge-outline mr-1">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-2 italic">
            '{friend.bio}'
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Preferred: email
          </p>
        </div>
        {/* ACTION BUTTONS */}
          <div className="space-y-2">
            <div className="bg-white rounded-xl p-3 shadow flex items-center justify-center gap-2">
              <BellMinus size={16} />
              <span>Snooze 2 Weeks</span>
            </div>

            <div className="bg-white rounded-xl p-3 shadow flex items-center justify-center gap-2">
              <Archive size={16} />
              <span>Archive</span>
            </div>

            <div className="bg-white rounded-xl p-3 shadow flex items-center justify-center gap-2 text-red-500">
              <Trash2 size={16} />
              <span>Delete</span>
            </div>
          </div>
</div>
       


        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-8">

          {/* TOP STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 text-center shadow">
              <h2 className="text-2xl font-bold text-green-600">
                {friend.days_since_contact}
              </h2>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow">
              <h2 className="text-2xl font-bold text-green-600">
                {friend.goal}
              </h2>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow col-span-2">
              <h2 className="text-lg font-semibold text-green-600">
                {friend.next_due_date}
              </h2>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white rounded-xl p-6 shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-gray-500 text-sm">
                Connect every {friend.goal} days
              </p>
            </div>
            <button className="btn btn-sm">Edit</button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="mb-3 font-semibold">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button className="btn flex flex-col h-25">
                <Phone size={18} />
                Call
              </button>

              <button className="btn flex flex-col h-25">
                <MessageSquare size={18} />
                Text
              </button>

              <button className="btn flex flex-col h-25">
                <Video size={18} />
                Video
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>

  );
};

export default FriendDetails;