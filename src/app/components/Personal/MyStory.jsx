"use client";
import React, { useState } from "react";

export default function MyStory({ lang }) {
  const [hovered, setHovered] = useState(false);

  const story = {
    title: { en: "My little story", mn: "Миний жижигхэн түүх" },
    content: {
      en: "When I was a child, my father brought home our first desktop computer. My brothers and I practically fought like crazy over who would get to use it. Those intense battles to play GTA and CS 1.6 weren't just for fun; they sparked a deep curiosity in me to understand how systems actually work and what networks really are. Seeking the answers to those very questions is what led me to choose this profession today. I still have so much more to learn. I am forever grateful to my family and teachers for always supporting me.",
      mn: "Бага байхад  аав минь анхны суурин компьютерийг авч өгж байсан юм. Ах нартайгаа компьютерээ булаацалдаж, бараг 'алалцаж' л өссөн дөө😂. GTA, CS 1.6 тоглохын төлөөх тэр их тэмцэл минь зүгээр нэг зугаа биш, харин системийн ажиллагаа, сүлжээ гэж яг юу болохыг ойлгох гэсэн сониуч занг минь асааж өгсөн. Тэр л асуултуудынхаа хариуг олох гэсээр өнөөдөр энэ мэргэжлийг сонгоод явж байна. Цаашид ч сурах зүйл их бий. Намайг үргэлж дэмждэг гэр бүл, багш нартаа баярлалаа.",
    },
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className="relative p-[1.5px] rounded-2xl overflow-hidden bg-white/10 transition-all duration-500"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Эргэлддэг Цэнхэр Гэрэл (Hover үед) */}
          <div
            className={`absolute inset-[-100%] animate-[spin_4s_linear_infinite] transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
            style={{
              background:
                "conic-gradient(from 0deg, transparent 20%, #3b82f6 50%, transparent 80%)",
            }}
          />

          <div className="relative p-8 md:p-10 rounded-2xl bg-[#030014]/95 backdrop-blur-xl z-10 h-full border border-white/5">
            <h2 className="text-xl md:text-2xl font-black text-white mb-6 tracking-tight flex items-center gap-3">
              <span className="text-blue-500">#</span> {story.title[lang]}
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light italic">
              {story.content[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
