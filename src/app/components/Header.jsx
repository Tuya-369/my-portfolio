"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header({ lang = "en", setLang }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);

    const handleScroll = () => {
      if (pathname !== "/") {
        setActiveSection("");
        return;
      }

      const sections = ["about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          if (
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleClick = (e, id) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
        setActiveSection(id);
      }
    }
  };

  if (!mounted)
    return (
      <nav className="fixed top-0 w-full h-16 bg-[#030014]/60 backdrop-blur-xl z-50" />
    );

  const checkActive = (id, type) => {
    if (type === "page") return pathname === id;
    if (type === "section") return pathname === "/" && activeSection === id;
    return false;
  };

  // whitespace-nowrap нэмсэнээр текстийг нэг мөрөнд барина
  const getLinkStyle = (isActive) =>
    `text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
      isActive
        ? "text-purple-400 border-b-2 border-purple-500 pb-1"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030014]/60 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 md:px-10 py-5 flex justify-between items-center">
        {/* NAVIGATION - Зүүн талд байрлах бөгөөд зайг нь тохируулсан */}
        <ul className="flex items-center gap-x-5 md:gap-x-10 overflow-x-auto no-scrollbar">
          <li>
            <Link
              href="/#about"
              onClick={(e) => handleClick(e, "about")}
              className={getLinkStyle(checkActive("about", "section"))}
            >
              {lang === "en" ? "Professional" : "Профайл"}
            </Link>
          </li>

          <li>
            <Link
              href="/#contact"
              onClick={(e) => handleClick(e, "contact")}
              className={getLinkStyle(checkActive("contact", "section"))}
            >
              {lang === "en" ? "Contact" : "Холбоо барих"}
            </Link>
          </li>

          <li>
            <Link
              href="/personal"
              className={getLinkStyle(checkActive("/personal", "page"))}
            >
              {lang === "en" ? "Personal" : "Хувийн"}
            </Link>
          </li>
        </ul>

        {/* LANG TOGGLE - Баруун талд */}
        <div className="flex items-center pl-4">
          <button
            onClick={() => setLang && setLang(lang === "en" ? "mn" : "en")}
            className="text-[10px] md:text-xs font-black text-gray-500 hover:text-purple-400 transition-all px-2 py-1 border border-white/10 rounded-md hover:border-purple-500/50"
          >
            {lang === "en" ? "MN" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
