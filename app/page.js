import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto py-20">
        {/* Your page content here */}
        <h1 className="text-4xl font-bold text-gray-900">Welcome to my amazing Next.js app!</h1>
        <p className="text-lg text-gray-800 mt-4">This is just a simple example, but you can expand on it to create your amazing website!</p>
      </div>
      <Footer/>
    </div>
  );
}
