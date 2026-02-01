"use client";
import { useState, useEffect } from "react";

export default function About({ lang }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const fullText =
      lang === "en" ? "Software Engineer" : "Програм Хангамжийн Инженер";

    const handleTyping = () => {
      if (!isDeleting) {
        // Үсэг нэмэх хэсэг
        setDisplayText(fullText.slice(0, displayText.length + 1));
        setSpeed(100); // Бичих хурд

        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Үсэг арилгах хэсэг
        setDisplayText(fullText.slice(0, displayText.length - 1));
        setSpeed(50);

        if (displayText === "") {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, lang, speed]);

  // ... (бусад content болон return хэсэг хэвээрээ)

  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Gantuya",
      desc: "Software Engineer | 2+ Years Experience. Crafting perfect web solutions with modern tech stacks.",
      stats: ["Years old", "Projects Done", "Production Web"],
    },
    mn: {
      greeting: "Сайн байна уу, намайг",
      name: "Гантуяа",
      desc: "Програм Хангамжийн Инженер | 2+ жилийн туршлагатай. Орчин үеийн технологиор төгс вэб шийдлүүдийг бүтээдэг.",
      stats: ["Настай", "Төсөл хийсэн", "Вэбсайт ашиглалтад"],
    },
  };

  const t = content[lang] || content.en;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#030014] py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-purple-500"></span>
            <span className="text-purple-400 font-mono font-bold tracking-tighter text-lg min-h-[24px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic leading-none">
            {t.greeting} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500">
              {t.name}
            </span>
          </h1>

          <p className="text-gray-400 text-lg border-l-4 border-purple-500/50 pl-6 mb-10 max-w-md">
            {t.desc}
          </p>

          <div className="flex gap-12">
            {[
              ["22", t.stats[0]],
              ["20+", t.stats[1]],
              ["5+", t.stats[2]],
            ].map(([num, label], i) => (
              <div key={i}>
                <p className="text-white text-4xl font-black italic">{num}</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Зураг хэсэг */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="absolute inset-0 bg-purple-600/10 blur-[120px] rounded-full"></div>
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full border border-white/5 p-4">
            <div className="absolute inset-0 border border-dashed border-purple-500/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-purple-900/20 to-transparent">
              <img
                src="/profile.png"
                className="w-full h-full object-contain mt-10 scale-110"
                alt="Gantuya"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
