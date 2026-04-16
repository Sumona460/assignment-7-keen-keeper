import { Archive, BellMinus, Trash2 } from "lucide-react";
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
    <div className="min-h-screen bg-base-200  items-center p-6 space-y-3 ">
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-md w-full text-center">

        <Image
          src={friend.picture}
          alt={friend.name}
          width={100}
          height={100}
          className="rounded-full mx-auto mb-4"
        />

        <h2 className="text-2xl font-bold">{friend.name}</h2>
        <p className="text-gray-500 mb-2">{friend.email}</p>

        <p className="text-sm mb-3">
          Last contact: {friend.days_since_contact} days ago
        </p>

        <p className="text-sm mb-3">
          Goal: {friend.goal} days
        </p>

        <p className="text-gray-600 mb-4">{friend.bio}</p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {friend.tags.map((tag, i) => (
            <span key={i} className="badge badge-outline">
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="badge badge-primary mb-4">
          {friend.status}
        </div>

      </div>

      <div className=" space-y-3">
        <div className="bg-white rounded-2xl shadow-md p-3 flex items-center justify-center max-w-md w-full text-center">
       <BellMinus /> <h3>Snooze Weeks</h3>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-3 max-w-md w-full text-center items-center flex items-center justify-center" >
       <Archive /> <h2>Archive</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-3 max-w-md w-full text-center text-red-500 flex items-center justify-center">
       <Trash2 /> <h3>Delete</h3>
      </div>
      </div>
    </div>
  );
};

export default FriendDetails;