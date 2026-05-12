import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`
    );
    window.location.href = `mailto:vonhathao.it@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: "/assets/logo-github.png",
      url: "https://github.com/nhathao512",
    },
    {
      name: "LinkedIn",
      icon: "/assets/logo-linkedin.png",
      url: "https://www.linkedin.com/in/nhathao512/",
    },
    {
      name: "Facebook",
      icon: "/assets/logo-fb.png",
      url: "https://www.facebook.com/nhathao512",
    },
    {
      name: "Instagram",
      icon: "/assets/logo-instagram.png",
      url: "https://www.instagram.com/nhathao512",
    },
  ];

  return (
    <div className="space-y-5 lg:space-y-8">
      <section className="scroll-reveal rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
        <h1 className="mb-3 text-3xl font-bold text-cyan-300 sm:text-4xl">Get In Touch</h1>
        <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
          Have a question, collaboration idea, or internship opportunity? I would be happy to hear
          from you.
        </p>
      </section>

      <section className="scroll-reveal grid grid-cols-1 gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
          <h2 className="mb-6 text-2xl font-semibold text-cyan-300">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-slate-950/45 px-4 py-3 text-gray-100 placeholder-gray-500 transition-colors focus:border-cyan-300 focus:outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-slate-950/45 px-4 py-3 text-gray-100 placeholder-gray-500 transition-colors focus:border-cyan-300 focus:outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full resize-none rounded-lg border border-white/10 bg-slate-950/45 px-4 py-3 text-gray-100 placeholder-gray-500 transition-colors focus:border-cyan-300 focus:outline-none"
                placeholder="Tell me what you are building..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        <div className="space-y-5">
          <div className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
            <h2 className="mb-6 text-2xl font-semibold text-cyan-300">Contact Information</h2>
            <div className="space-y-3">
              <a
                href="mailto:vonhathao.it@gmail.com"
                className="group flex min-w-0 items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10">
                  <Mail size={22} className="text-cyan-300" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="truncate text-gray-200 transition-colors group-hover:text-cyan-200">
                    vonhathao.it@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+84334944908"
                className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10">
                  <Phone size={22} className="text-cyan-300" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-gray-200 transition-colors group-hover:text-cyan-200">
                    +84 334 944 908
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10">
                  <MapPin size={22} className="text-cyan-300" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-gray-200">Ho Chi Minh, Vietnam</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
            <h2 className="mb-6 text-2xl font-semibold text-cyan-300">Connect With Me</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/10"
                >
                  <img src={social.icon} alt="" className="h-6 w-6 object-contain" loading="lazy" />
                  <span className="font-medium text-gray-300 transition-colors group-hover:text-cyan-200">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
