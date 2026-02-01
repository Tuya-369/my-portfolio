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
    { name: lang === "en" ? "About" : "Тухай", id: "about" },
    { name: lang === "en" ? "Skills" : "Чадвар", id: "skills" },
    { name: lang === "en" ? "Projects" : "Төсөл", id: "projects" },
    { name: lang === "en" ? "Education" : "Боловсрол", id: "education" },
    { name: lang === "en" ? "Contact" : "Холбоо", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030014]/60 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 md:px-10 py-4">
        <ul className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 md:gap-x-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className="text-gray-400 hover:text-purple-400 font-bold text-[10px] md:text-sm tracking-widest transition-all duration-300 uppercase"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Шинэ, маш гоё Button хэсэг */}
          <li className="ml-2">
            <button
              onClick={() => setLang(lang === "en" ? "mn" : "en")}
              className="relative group px-4 py-1.5 rounded-full overflow-hidden
                         border border-purple-500/40 bg-purple-500/10 
                         transition-all duration-500 ease-out
                         hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]
                         active:scale-95 flex items-center gap-2"
            >
              {/* Хулгана очиход дүүрэх эффект */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 
                              translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"
              ></div>

              <span
                className="relative z-10 text-[10px] md:text-xs font-black text-purple-300 
                               group-hover:text-white transition-colors duration-300 tracking-tighter"
              >
                {lang === "en" ? "MN" : "EN"}
              </span>

              {/* Жижигхэн "Active" цэг */}
              <div className="relative w-1 h-1 rounded-full bg-purple-400 group-hover:bg-white animate-pulse"></div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
