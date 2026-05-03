import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Courses from "@/components/sections/Courses";
import Footer from "@/components/sections/Footer";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Hudozhka — детская художественная школа",
  description: "Школа искусств для детей от 4 до 14 лет. Рисунок, живопись, лепка и другие творческие курсы.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero id="hero" />
        <About id="about" />
        <Courses id="courses" />
      </main>
      <Footer id="contact" />
    </>
  );
}