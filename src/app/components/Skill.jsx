"use client";
const MarqueeRow = ({ skills, direction = "left", speed = "30s" }) => (
  <div className="relative flex overflow-hidden py-3">
    <div
      className="flex whitespace-nowrap animate-marquee-scroll"
      style={{
        animation: `marquee-${direction} ${speed} linear infinite`,
      }}
    >
      {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
        <div
          key={i}
          className="mx-3 flex items-center gap-3 px-6 py-3 bg-[#0a0a1a] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
        >
          <img
            src={`/skillIcon/${skill.icon}`}
            alt={skill.name}
            className="w-6 h-6 object-contain brightness-0 invert opacity-70"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <span className="text-gray-300 font-medium text-sm uppercase tracking-wider">
            {skill.name}
          </span>
        </div>
      ))}
    </div>

    <style jsx>{`
      @keyframes marquee-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      @keyframes marquee-right {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0);
        }
      }
    `}</style>
  </div>
);

export default function Skill({ lang }) {
  const allSkills = [
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "TypeScript", icon: "typescript.svg" },
    { name: "Next.js", icon: "nextdotjs.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Tailwind", icon: "tailwindcss.svg" },
    { name: "Node.js", icon: "nodedotjs.svg" },
    { name: "Express", icon: "expressdotcom.svg" },
    { name: "Prisma", icon: "prisma.svg" },
    { name: "PostgreSQL", icon: "postgresql.svg" },
    { name: "MongoDB", icon: "mongodb.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "Vercel", icon: "vercel.svg" },
    { name: "Gemini", icon: "googlegemini.svg" },
    { name: "C++", icon: "c++.svg" },
    { name: "Shadcn", icon: "shadcnui.svg" },
  ];

  const row1 = allSkills.slice(0, 5);
  const row2 = allSkills.slice(5, 10);
  const row3 = allSkills.slice(10, 15);

  return (
    <section
      id="skills"
      className="py-24 bg-[#030014] relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic uppercase tracking-tighter">
            {lang === "en" ? "TECHNICAL" : "ТЕХНИК"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              {lang === "en" ? "SKILLS" : "УР ЧАДВАР"}
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-2">
          <MarqueeRow skills={row1} direction="left" speed="25s" />
          <MarqueeRow skills={row2} direction="right" speed="30s" />
          <MarqueeRow skills={row3} direction="left" speed="28s" />
        </div>
      </div>
    </section>
  );
}
