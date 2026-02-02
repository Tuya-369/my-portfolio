"use client";
import { useState } from "react";
import Header from "../components/Header";
import AboutMe from "../components/Personal/AboutMe";
import HobbySection from "../components/Personal/Hobby";
import MyStory from "../components/Personal/MyStory";
import ContactFooter from "../components/Personal/ContactFooter";

export default function PersonalPage() {
  const [lang, setLang] = useState("en");

  return (
    <main className="bg-[#030014] min-h-screen">
      <Header lang={lang} setLang={setLang} />

      <div className="pt-20">

        <AboutMe lang={lang} />
        <HobbySection lang={lang} />
        <MyStory lang={lang} />
        <ContactFooter lang={lang} />
      </div>
    </main>
  );
}
