import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Courses from "@/components/sections/Courses";
import Footer from "@/components/sections/Footer";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Детская художественная школа в Барселоне | Hudozhka",
  description:
    "🎨 Детская художественная школа в Барселоне для детей 4-14 лет. Рисунок, живопись, лепка с русскоязычными педагогами. Пробный урок бесплатно!",
  keywords: [
    "детская художественная школа барселона",
    "уроки рисования для детей барселона",
    "русская школа искусства испания",
    "творческие кружки барселона",
  ],
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
