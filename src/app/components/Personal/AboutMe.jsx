"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function AboutMe({ lang }) {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter текст - Хэл бүрт зориулж өөрчиллөө
  const fullText = useMemo(
    () =>
      lang === "en"
        ? "Hello again!\nMy nickname is Okojo"
        : "Дахин сайн уу?\nНамайг Окожо гэдэг",
    [lang],
  );

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText((prev) => fullText.slice(0, prev.length + 1));
        if (displayText === fullText)
          setTimeout(() => setIsDeleting(true), 3000);
      } else {
        setDisplayText((prev) => fullText.slice(0, prev.length - 1));
        if (displayText === "") setIsDeleting(false);
      }
    };
    const speed = isDeleting ? 75 : 150;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, fullText]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#030014]" />;

  return (
    <section
      id="AboutMe"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014] py-20 px-6"
    >
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-900/20 blur-[120px] rounded-full" />
        {stars.map((star) => (
          <motion.div
            key={star.id}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: star.duration, repeat: Infinity }}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-20 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight min-h-[120px] md:min-h-[160px] whitespace-pre-line">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-8 md:w-2 md:h-16 bg-purple-500 ml-2 align-middle"
              />
            </h1>

            {/* ШИНЭЧИЛСЭН ДУЛААХАН ТЕКСТ */}
            <p className="mt-6 text-gray-300 font-medium tracking-wide text-sm md:text-base italic opacity-90">
              {lang === "en"
                ? "Born in 2004 as my father's middle daughter..."
                : "2004 онд аавынхаа дунд охин болон мэндэлсэн..."}
            </p>
            <div className="mt-2 h-[2px] w-20 bg-gradient-to-r from-purple-500 to-transparent md:mx-0 mx-auto" />
          </motion.div>
        </div>

        {/* RIGHT: PORTAL & MASKED IMAGE */}
        <div className="order-1 md:order-2 flex justify-center items-center relative py-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] md:w-[480px] md:h-[480px] border-2 border-dashed border-purple-500/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[260px] h-[260px] md:w-[420px] md:h-[420px] border border-blue-500/20 rounded-full shadow-[0_0_60px_rgba(168,85,247,0.15)]"
          />

          <div
            className="relative z-10 w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden flex justify-center items-end"
            style={{
              maskImage:
                "radial-gradient(circle at center, black 40%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 40%, transparent 85%)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full flex justify-center items-end"
            >
              <img
                src="/Tuya.png"
                alt="Okojo"
                className="w-[85%] md:w-[90%] object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] translate-y-4"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
