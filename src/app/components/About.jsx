"use client";

export default function About({ lang }) {
  const content = {
    en: {
      role: "Software Engineer",
      greeting: "Hello, I'm",
      name: "Gantuya",
      desc: "Software Engineer | 2+ Years Experience. Crafting perfect web solutions with modern tech stacks.",
      stats: ["Years old", "Projects Done", "Production Web"],
    },
    mn: {
      role: "Програм Хангамжийн Инженер",
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030014] py-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.08),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Текст хэсэг */}
          <div className="max-w-xl order-2 md:order-1">
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-transparent"></span>
                <span className="text-purple-400 font-mono text-base font-bold tracking-wider uppercase">
                  {t.role}
                </span>
              </div>
            </div>

            {/* Текстийн хэмжээг энд багасгасан: text-4xl-ээс text-6xl болгов */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight uppercase italic">
              {t.greeting} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {t.name}
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md border-l-2 border-purple-500/30 pl-6">
              {t.desc}
            </p>

            <div className="flex gap-8">
              <div className="relative group cursor-default">
                <div className="relative">
                  <p className="text-white font-bold text-3xl italic">22</p>
                  <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] font-bold">
                    {t.stats[0]}
                  </p>
                </div>
              </div>

              <div className="relative group cursor-default">
                <div className="relative">
                  <p className="text-white font-bold text-3xl italic">20+</p>
                  <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] font-bold">
                    {t.stats[1]}
                  </p>
                </div>
              </div>

              <div className="relative group cursor-default">
                <div className="relative">
                  <p className="text-white font-bold text-3xl italic">5+</p>
                  <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] font-bold">
                    {t.stats[2]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Зураг хэсэг */}
          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 bg-purple-600/10 blur-[100px] rounded-full"></div>

            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 border-[2px] border-dashed border-purple-500/30 rounded-full animate-[spin_40s_linear_infinite]"></div>

              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-full">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-[85%] h-[85%] object-contain filter drop-shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src =
                      "https://ui-avatars.com/api/?name=Gantuya&background=A855F7&color=fff&size=512";
                  }}
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 85%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 85%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
