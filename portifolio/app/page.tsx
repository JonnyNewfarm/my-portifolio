"use client";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import ScrollParagraph from "../components/ScrollParagraph";
import ScrollText from "@/components/ScrollText";
import MyProjects from "@/components/MyProjects";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <div>
        <ScrollText value="Hi, I'm Jonas, a 28-year-old designer and developer with a passion for creating seamless, user-friendly digital experiences. With expertise in JavaScript and TypeScript, I work extensively with libraries like React and Next.js to build dynamic, responsive websites and applications. I’m always excited to blend design with development to bring innovative ideas to life." />
      </div>
      <MyProjects />
    </div>
  );
}
