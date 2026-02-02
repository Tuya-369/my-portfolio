"use client";
import React, { useState } from "react";

const hobbies = [
  {
    title: "Piano",
    description: {
      en: "Every melody tells a story. The piano is the expression of my inner world.",
      mn: "Аялгуу бүхэн өөрийн гэсэн түүхтэй. Төгөлдөр хуур бол миний дотоод ертөнцийн илэрхийлэл.",
    },
    image: "/Hobby/Piano.jpg",
  },
  {
    title: "CS2",
    description: {
      en: "Gaming is more than just fun—it's about the focus and the rush of the win.",
      mn: "Зүгээр л тоглох биш, төвлөрөл болон ялалтын мэдрэмжид нь дуртай.",
    },
    image: "/Hobby/Cs2.jpg",
  },
  {
    title: "Basketball",
    description: {
      en: "Basketball 2nd-degree athlete. Former school team player.",
      mn: "Сагсан бөмбөгийн II зэрэгтэй. 10 жилдээ сургуулийнхаа шигшээ багт тоглодог байсан.",
    },
    image: "/Hobby/Basketball.jpg",
  },
  {
    title: "Biking",
    description: {
      en: "Riding my bike on warm, rainy days with my favorite music.",
      mn: "Дулаахан, бороотой өдөр дуртай дуугаа сонсонгоо дугуйтай давхих дуртай.",
    },
    image: "/Hobby/biking.jpg",
  },
];

function HobbyCard({ hobby, lang }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative p-[1.5px] rounded-3xl overflow-hidden bg-white/5 transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
    >
      <div
        className={`absolute inset-[-100%] animate-[spin_4s_linear_infinite] transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 20%, #f97316 50%, transparent 80%)",
        }}
      />

      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#030014] z-10">
        <img
          src={hobby.image}
          alt={hobby.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />

        {/* Responsive Text Logic */}
        <div
          className={`absolute bottom-0 p-6 md:p-8 w-full transition-all duration-500 
          translate-y-0 opacity-100 
          md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100`}
        >
          <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 tracking-tight">
            {hobby.title}
          </h3>
          <p className="text-[12px] md:text-sm text-gray-300 leading-relaxed line-clamp-3">
            {hobby.description[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HobbySection({ lang }) {
  return (
    <section className="py-20 px-6 md:px-10 bg-[#030014]">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter flex flex-wrap justify-center items-center gap-x-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">
            {lang === "en" ? "Okojo's" : "Окожо-гийн"}
          </span>
          <span>{lang === "en" ? "Hobbies" : "хоббинууд"}</span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
          {lang === "en"
            ? "I love keeping myself active and exploring new fields."
            : "Би өөрийгөө үргэлж идэвхтэй байлгаж, сонирхсон салбар болгондоо суралцахыг эрмэлздэг."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {hobbies.map((hobby, index) => (
          <HobbyCard key={index} hobby={hobby} lang={lang} />
        ))}
      </div>
    </section>
  );
}
