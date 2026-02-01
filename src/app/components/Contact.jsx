"use client";
import { useState } from "react";
import {
  Mail,
  Github,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function Contact({ lang }) {
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  // Орчуулгын текстүүд
  const t = {
    en: {
      title: "GET IN",
      highlight: "TOUCH",
      sub: "Let's build something amazing together.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      placeholderName: "Your Name",
      placeholderEmail: "Your Email",
      placeholderMessage: "Your Message",
      btnSend: "Send Message",
      btnSending: "Sending...",
      btnSuccess: "Message Sent!",
      btnError: "Error! Try Again",
    },
    mn: {
      title: "ХОЛБОО",
      highlight: "БАРИХ",
      sub: "Хамтдаа гайхалтай зүйлсийг бүтээцгээе.",
      emailLabel: "И-мэйл",
      githubLabel: "Гитхаб",
      placeholderName: "Таны нэр",
      placeholderEmail: "Таны и-мэйл",
      placeholderMessage: "Таны мессеж",
      btnSend: "Мессеж илгээх",
      btnSending: "Илгээж байна...",
      btnSuccess: "Амжилттай илгээлээ!",
      btnError: "Алдаа гарлаа! Дахин оролдоно уу",
    },
  };

  const content = t[lang] || t.en;

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.target);
    formData.append("access_key", "b15fef09-d39f-4daa-8f03-5bae1e5b6c95");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        event.target.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen py-24 bg-[#030014] relative flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic tracking-tight uppercase">
            {content.title}{" "}
            <span className="text-blue-500">{content.highlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{content.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <a
              href="mailto:gantulgagantuya30@gmail.com"
              className="flex items-center gap-6 p-6 rounded-2xl bg-[#0a0a1a] border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">
                  {content.emailLabel}
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Tuya-369"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 rounded-2xl bg-[#0a0a1a] border border-white/5 hover:border-purple-500/30 transition-all group"
            >
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <Github size={24} />
              </div>
              <div className="text-left">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">
                  {content.githubLabel}
                </p>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              required
              placeholder={content.placeholderName}
              className="w-full p-4 rounded-xl bg-[#0a0a1a] border border-white/5 text-white focus:outline-none focus:border-blue-500 transition duration-300"
            />
            <input
              name="email"
              type="email"
              required
              placeholder={content.placeholderEmail}
              className="w-full p-4 rounded-xl bg-[#0a0a1a] border border-white/5 text-white focus:outline-none focus:border-blue-500 transition duration-300"
            />
            <textarea
              name="message"
              required
              placeholder={content.placeholderMessage}
              rows="4"
              className="w-full p-4 rounded-xl bg-[#0a0a1a] border border-white/5 text-white focus:outline-none focus:border-blue-500 transition duration-300 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                status === "success"
                  ? "bg-green-600"
                  : status === "error"
                    ? "bg-red-600"
                    : "bg-blue-600 hover:bg-blue-700"
              } text-white shadow-lg shadow-blue-900/20 group`}
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  {content.btnSending}
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle size={18} />
                  {content.btnSuccess}
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle size={18} />
                  {content.btnError}
                </>
              ) : (
                <>
                  <span>{content.btnSend}</span>
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
