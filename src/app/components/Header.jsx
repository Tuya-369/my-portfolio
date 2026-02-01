"use client";

export default function Header({ lang, setLang }) {
  const customScrollTo = (targetY, duration) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startY, difference, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const targetY =
        element.getBoundingClientRect().top + window.scrollY - offset;
      customScrollTo(targetY, 1200);
    }
  };

  const navLinks = [
    { name: lang === "en" ? "About" : "Миний тухай", id: "about" },
    { name: lang === "en" ? "Education" : "Боловсрол", id: "education" },
    { name: lang === "en" ? "Skills" : "Ур чадвар", id: "skills" },
    { name: lang === "en" ? "Projects" : "Төслүүд", id: "projects" },
    { name: lang === "en" ? "Contact" : "Холбоо барих", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030014]/30 backdrop-blur-md border-b border-white/5">
      {/* justify-end нэмснээр бүх элемент баруун тал руу шахагдана */}
      <div className="container mx-auto px-6 flex justify-end items-center py-4 gap-8">
        {/* Nav Links - Gap-ийг 6 болгож багасгав */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className="text-gray-500 hover:text-white font-medium text-[10px] tracking-[0.2em] transition-all duration-300 uppercase"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Хэл солих товч - Илүү жижигхэн (py-1 px-3) болгосон */}
        <button
          onClick={() => setLang(lang === "en" ? "mn" : "en")}
          className="relative px-3 py-1.5 rounded-md border border-white/10 text-[9px] font-bold text-gray-400 hover:border-purple-500/50 hover:text-white transition-all duration-500 uppercase tracking-tighter overflow-hidden group bg-white/5"
        >
          <span className="relative z-10 flex items-center gap-1">
            {lang === "en" ? "MN" : "EN"}
          </span>
          <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
        </button>
      </div>
    </nav>
  );
}
