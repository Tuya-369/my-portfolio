"use client";

export default function Header({ lang, setLang }) {
  // ... (customScrollTo болон handleClick функцүүд хэвээрээ)

  const navLinks = [
    { name: lang === "en" ? "About" : "Миний тухай", id: "about" },
    { name: lang === "en" ? "Education" : "Боловсрол", id: "education" },
    { name: lang === "en" ? "Skills" : "Ур чадвар", id: "skills" },
    { name: lang === "en" ? "Projects" : "Төслүүд", id: "projects" },
    { name: lang === "en" ? "Contact" : "Холбоо барих", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030014]/40 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-10 flex justify-end items-center py-5 gap-10">
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className="text-gray-400 hover:text-purple-400 font-medium text-xs tracking-[0.15em] transition-all duration-300 uppercase"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setLang(lang === "en" ? "mn" : "en")}
          className="px-4 py-2 rounded-lg border border-purple-500/20 text-[11px] font-bold text-purple-400 hover:bg-purple-500/10 transition-all duration-300 tracking-widest"
        >
          {lang === "en" ? "MN" : "EN"}
        </button>
      </div>
    </nav>
  );
}
