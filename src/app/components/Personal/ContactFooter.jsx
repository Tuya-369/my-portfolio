"use client";
import React, { useState, useEffect } from "react";
import {
  Facebook,
  Mail,
  Instagram,
  MapPin,
  Clock,
  CloudSun,
} from "lucide-react";

export default function ContactFooter({ lang }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Ulaanbaatar",
        }),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="py-24 px-6 border-t border-white/[0.05] bg-[#030014]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
              {lang === "en" ? "Let's build" : "Хамтдаа"}{" "}
              <span className="text-orange-500 font-semibold italic">
                {lang === "en" ? "something great" : "бүтээцгээе"}
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light opacity-80 mb-8">
              {lang === "en"
                ? "I'm always open to new opportunities and creative collaborations."
                : "Би шинэ боломжууд болон бүтээлч хамтын ажиллагаанд үргэлж нээлттэй."}
            </p>

            <div className="flex gap-3">
              {[
                {
                  icon: <Facebook size={18} />,
                  link: "https://facebook.com/...",
                },
                {
                  icon: <Instagram size={18} />,
                  link: "https://instagram.com/...",
                },
                { icon: <Mail size={18} />, link: "mailto:..." },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 gap-3 p-2 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md">
              {/* Location & Time */}
              <div className="col-span-2 flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03]">
                <div className="p-2 rounded-full bg-orange-500/10 text-orange-500">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                    Ulaanbaatar
                  </p>
                  <p className="text-sm font-medium text-white">{time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
