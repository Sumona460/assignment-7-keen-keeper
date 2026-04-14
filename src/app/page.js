import Navbar from "@/components/navbar/page";
import { Plus } from "lucide-react";
import Image from "next/image";
// hello
export default function Home() {
  return (
  
  <div>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="">
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




  </div>
  );
}
