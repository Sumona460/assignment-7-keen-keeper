import { Plus } from "lucide-react";

export const metadata = {
  title: "Home",
  description: "Page",
};



const HomePage = async () => {
    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json();

    return (
       <div className="bg-base-200">
    <div className="hero  min-h-full">
  <div className="hero-content text-center">
    <div className=" mt-20">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
relationships that matter most.
      </p>
      <button className="btn btn-success text-white "><Plus></Plus>Add a Friend</button>
    </div>
  </div>
</div>



{/* your friends section */}
<section className="container mx-auto space-y-4">
    <hr className="text-gray-200" />
  <h3 className="text-2xl font-semibold text-[#1F2937]">Your Friends</h3>


 <div className="grid grid-cols-4 gap-4 container mx-auto">
    {
        friends.map(friend =>  <div key={friend.id} className="card bg-base-100  shadow-sm">
  <figure>
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" /> */}
  </figure>
  <div className="card-body text-center">
   
    <h2 className=" text-center font-bold text-2xl">
      {friend.name}
     
    </h2>
    <p className="text-gray-500">{friend.days_since_contact}d ago
    
    </p>
     
     <div>
         <div className="badge badge-soft badge-success">{friend.tags}</div>
         <br />
         
      <div className="badge badge-soft badge-warning mt-2.5">{friend.status}</div>
     </div>
    
         
    
    
     
  </div>
</div>
 )
    }
 </div>


 
</section>



  </div>
    );
};

export default HomePage;