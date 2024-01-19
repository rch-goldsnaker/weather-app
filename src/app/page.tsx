"use client";
import Spline from "@splinetool/react-spline";
import { Footer, Header, Navbar } from "./components";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-cyan-500 to-blue-500 h-[1000px] md:h-auto">
      <div className="absolute w-full h-full text-white flex flex-col justify-between">
        <div className="flex flex-col">
          <Navbar />
          <Header />
        </div>
        <Footer />
      </div>
      <div className="h-screen">
        <Spline scene="https://prod.spline.design/EKWGcyh7dAqFtuAO/scene.splinecode" />
      </div>
    </div>
  );
}
