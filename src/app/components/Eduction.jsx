"use client";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education({ lang }) {
  const educationData = [
    {
      school:
        lang === "en"
          ? "Secondary School No. 152"
          : "Ерөнхий Боловсролын 152-р Сургууль",
      degree: lang === "en" ? "High School Diploma" : "Бүрэн Дунд Боловсрол",
      duration: "2011 - 2023",
      description:
        lang === "en"
          ? "Completed general secondary education with a focus on mathematics and natural sciences."
          : "Математик, байгалийн ухааны чиглэлээр ерөнхий боловсрол эзэмшиж, амжилттай төгссөн.",
      color: "green",
    },
    {
      school: lang === "en" ? "MUST - SICT" : "ШУТИС - МХТС",
      degree:
        lang === "en" ? "Internet of Things (IoT)" : "Юмсын Интернет (IoT)",
      duration: "2023 - 2024",
      description:
        lang === "en"
          ? "Studied the fundamentals of network protocols, embedded systems, and the integration of hardware with cloud-based software solutions."
          : "Сүлжээний протокол, суулгагдсан системүүд (embedded systems) болон техник хангамжийг үүлэн технологитой холбох үндсэн арга зүйг судалсан.",
      color: "purple",
    },
    {
      school: lang === "en" ? "Pinecone Academy" : "Пайкон Академи",
      degree:
        lang === "en" ? "Software Engineering" : "Програм Хангамжийн Инженер",
      duration:
        lang === "en"
          ? "2025 (1 Year Intensive)"
          : "2025 (1 жилийн эрчимжүүлсэн)",
      description:
        lang === "en"
          ? "Focused on full-stack development, modern technologies, and advanced algorithms and data structures."
          : "Full-stack хөгжүүлэлт, орчин үеийн технологиуд болон алгоритм, өгөгдлийн бүтцийн ахисан түвшний сургалт.",
      color: "blue",
    },
  ];
  const t = {
    en: { title: "My", highlight: "Education" },
    mn: { title: "Миний", highlight: "Боловсрол" },
  };

  const header = t[lang] || t.en;

  return (
    <section
      id="education"
      className="min-h-screen py-24 bg-[#030014] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10" />

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

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-[2rem] bg-[#0a0a1a] border border-white/5 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shrink-0`}
                >
                  <GraduationCap size={32} />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase">
                      {edu.school}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                      <Calendar size={14} />
                      {edu.duration}
                    </div>
                  </div>

                  <h4 className="text-lg font-medium text-blue-500 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {edu.degree}
                  </h4>

                  <p className="text-gray-400 leading-relaxed italic">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
