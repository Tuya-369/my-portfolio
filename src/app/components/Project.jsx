"use client";
import { ExternalLink, Github } from "lucide-react";

export default function Project({ lang }) {
  const projects = [
    {
      title: "60 Seconds - Уншиж сурах нь хөгжилтэй",
      description:
        lang === "en"
          ? "I built this to make reading a fun challenge for kids! It listens to them read for a minute, then points out exactly which words were tricky, helping little ones grow their confidence step by step."
          : "Хүүхдүүд уншиж сурахдаа битгий залхаасай гэж бодож энэ төслийг эхлүүлсэн. Ердөө 60 секундэд хүүхдийг уншуулж, аль үг дээр алдсаныг нь маш тодорхой харуулж, урам өгөх зорилготой вэбсайт юм.",
      tech: ["TypeScript", "Tailwind CSS", "Gemini AI", "Next.js"],
      link: "https://final-project-self-three.vercel.app/",
      github: "https://github.com/Merkzadok/SixtySeconds",
      image: "/project1.png",
    },
    {
      title: "Buy Me Coffee",
      description:
        lang === "en"
          ? "A platform that allows users to support content creators by buying them virtual coffee."
          : "Контент бүтээгчдийг дэмжих зорилготой, тэдэнд виртуал кофе авч өгөх замаар урамшуулал илгээх платформ.",
      tech: ["JavaScript", "Tailwind", "Firebase"],
      link: "https://buy-me-coffee-beryl.vercel.app/",
      github: "https://github.com/Tuya-369",
      image: "/project2.png",
    },
    {
      title: "T-MONGOLIA (UI Clone Study)",
      description:
        lang === "en"
          ? "A work-in-progress project where I'm recreating the e-Mongolia interface from scratch to master complex layouts and professional UI components. Currently focusing on pixel-perfect replication."
          : "e-Mongolia-гийн бүтцийг эхнээс нь өөрөө бичиж, нарийн бүтэцтэй вэбсайтыг яаж кодлодогт суралцаж буй туршилт. Одоогоор яг ижилхэн харагдуулах (pixel-perfect) хөгжүүлэлтийн шатандаа явж байна.",
      tech: ["JavaScript", "Tailwind CSS", "Next.js", "Learning in progress"],
      link: "https://t-mongolia.vercel.app/",
      github: "https://github.com/Tuya-369/T-MONGOLIA",
      image: "/project3.png",
    },
  ];

  const t = {
    en: {
      title: "A small",
      highlight: "selection of recent projects",
      visit: "Visit",
    },
    mn: {
      title: "Миний хийсэн",
      highlight: "сүүлийн үеийн төслүүд",
      visit: "Үзэх",
    },
  };

  const header = t[lang] || t.en;

  return (
    <section
      id="projects"
      className="min-h-screen py-24 bg-[#030014] relative overflow-hidden"
    >
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <header className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic uppercase tracking-tighter">
            {header.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              {header.highlight}
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#0a0a1a] border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-60 w-full overflow-hidden bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors uppercase">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow italic">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-3 py-1 bg-white/5 text-gray-300 text-[10px] font-medium rounded-lg border border-white/10"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 group/btn"
                  >
                    {header.visit}
                    <ExternalLink
                      size={16}
                      className="group-hover/btn:translate-x-0.5 transition-transform"
                    />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl border border-white/10 transition-all"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
