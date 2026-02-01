"use client";
import { useState } from "react"; // useState нэмсэн
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Eduction";
import Header from "./components/Header";
import Project from "./components/Project";
import Skill from "./components/Skill";

export default function Home() {
  const [lang, setLang] = useState("en");

  return (
    <main className="relative">
      <Header lang={lang} setLang={setLang} />
      <div className="pt-16">
        <About lang={lang} />
        <Education lang={lang} />
        <Skill lang={lang} />
        <Project lang={lang} />
        <Contact lang={lang} />
      </div>
    </main>
  );
}
