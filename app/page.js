import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Main Part Start From Here */}  
      <h2>CodeWithAaryan</h2>
      <h1>Hello Mitro</h1>
      {/* Main Parts End Here */}
      <Footer />
    </div>
  );
}
