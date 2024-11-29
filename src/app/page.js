"use client"
// in future could give problem 
import Image from "next/image";
import "./globals.css";
import { useRouter } from "next/navigation"; // Correct import for the App Router

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/calendar"); // Navigate to the desired route
  };

  return (
  <div className="flex flex-col min-h-screen">
{/* Navbar */}


{/* Hero Section */}
<div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-8">
  {/* Icon */}

  {/* Title */}
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center ">
    Welcome to Compliance Monitoring System
  </h1>

  {/* Description */}
  <p className="text-lg md:text-xl lg:text-2xl text-center max-w-2xl mb-8">
    Streamline your compliance processes with ease and ensure regulatory
    requirements are met with our comprehensive monitoring tools.
  </p>

  {/* Call-to-Action Button */}
  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 font-bold rounded-lg text-white shadow-md transition duration-300" onClick={handleNavigation}>
  
    Get Started
  </button>
</div>

{/* Testimonials Section */}
<div className="bg-gray-100 py-8">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
    Trusted by 100+ Clients
  </h2>
  <p className="text-center text-gray-600">
    "This system has transformed the way we handle compliance!"
  </p>
</div>


</div>
);

}
