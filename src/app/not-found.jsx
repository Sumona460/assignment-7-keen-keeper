
import Link from "next/link";
import { Home, Search } from "lucide-react";


const NotFound = () => {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      <div className="max-w-xl w-full text-center">

        
        <h1 className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
          404
        </h1>

        
        <p className="mt-4 text-gray-400 text-lg">
          Sorry, we couldn't find the page you're looking for.
        </p>

        
    
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition px-5 py-3 rounded-2xl"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>

        
        <p className="mt-6 text-sm text-gray-600">
          Error Code: 404 | Page Not Found
        </p>
      </div>
    </div>

    );
};

export default NotFound;