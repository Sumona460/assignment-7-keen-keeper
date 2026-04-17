import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Page",
};



const HomePage = async () => {

  
    const res = await fetch("http://localhost:3000/friends.json", {
  cache: "no-store"
});
    const friends = await res.json();


    const totalFriends = friends.length;
const onTrack = friends.filter(f => f.status === "on-track").length;
const overdue = friends.filter(f => f.status === "overdue").length;
const interactions = friends.reduce((acc, f) => acc + f.days_since_contact, 0);
    

    return (
       <div className="bg-base-200 p-8 md:p-0 lg:p-0">
    <div className="hero  min-h-full">
  <div className="hero-content text-center">
    <div className=" mt-20">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6 text-gray-400">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
relationships that matter most.
      </p>
      <button className="btn btn-success text-white "><Plus></Plus>Add a Friend</button>
    </div>
  </div>


</div>

{/* total friends section */}
<section className="grid grid-cols-2 lg:grid-cols-4 container mx-auto gap-4 mb-5">
  
  <div className="text-center mt-10 bg-base-100 rounded-2xl p-4">
    <h2 className="text-4xl font-bold text-green-600">{totalFriends}</h2>
    <p className="text-gray-500">Total Friends</p>
  </div>

  <div className="text-center mt-10 bg-base-100 rounded-2xl p-4">
    <h2 className="text-4xl font-bold text-green-600">{onTrack}</h2>
    <p className="text-gray-500">On Track</p>
  </div>

  <div className="text-center mt-10 bg-base-100 rounded-2xl p-4">
    <h2 className="text-4xl font-bold text-green-600">{overdue}</h2>
    <p className="text-gray-500">Need Attention</p>
  </div>

  <div className="text-center mt-10 bg-base-100 rounded-2xl p-4">
    <h2 className="text-4xl font-bold text-green-600">{interactions}</h2>
    <p className="text-gray-500">Interactions</p>
  </div>

</section>



{/* your friends section */}
<section className="container mx-auto space-y-4">
    <hr className="text-gray-200" />
  <h3 className="text-2xl font-semibold text-[#1F2937]">Your Friends</h3>


 <div className=" grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 container mx-auto ">
    {
        friends.map(friend =>  <div key={friend.id} className="card bg-base-100  shadow-sm">
  <figure>
     <Image
            src={friend.picture}
            alt={friend.name}
            width={80}
            height={80}
            className="rounded-full mt-4"
          />
  </figure>
  <div className="card-body text-center">
   
    <h2 className=" text-center font-bold text-2xl">
      {friend.name}
     
    </h2>
    <p className="text-gray-500">{friend.days_since_contact}d ago
    
    </p>
     
     <div>
        

         <div className="flex flex-wrap gap-2 justify-center">
  {friend.tags.map((tag, i) => (
    <span key={i} className="badge badge-soft badge-success">
      {tag}
    </span>
  ))}
</div>
         <br />
         
      <div className="badge badge-soft badge-warning mt-2.5">{friend.status}</div>
     </div>
  </div>

   <Link
          href={`/friends/${friend.id}`} className="text-center text-gray-400"

        >
         View Details
         
        </Link>
</div>
 )
    }
 </div>


 
</section>



  </div>
    );
};

export default HomePage;