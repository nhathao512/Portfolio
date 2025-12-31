import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (placeholder)
    console.log("Form submitted:", formData);
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
      icon: Github,
      url: "https://github.com/nhathao512",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/nhathao512",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/nhathao512",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
        <h1 className="mb-3 text-4xl font-bold text-blue-400">Get In Touch</h1>
        <p className="text-lg text-gray-300">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-semibold text-blue-400">Send a Message</h2>
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
                className="w-full rounded-lg border border-gray-600/50 bg-gray-700/50 px-4 py-3 text-gray-100 placeholder-gray-400 transition-colors focus:border-blue-400 focus:outline-none"
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
                className="w-full rounded-lg border border-gray-600/50 bg-gray-700/50 px-4 py-3 text-gray-100 placeholder-gray-400 transition-colors focus:border-blue-400 focus:outline-none"
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
                className="w-full resize-none rounded-lg border border-gray-600/50 bg-gray-700/50 px-4 py-3 text-gray-100 placeholder-gray-400 transition-colors focus:border-blue-400 focus:outline-none"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-600 hover:shadow-xl"
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Contact Info & Social */}
        <div className="space-y-6">
          {/* Contact Info Cards */}
          <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
            <h2 className="mb-6 text-2xl font-semibold text-blue-400">Contact Information</h2>
            <div className="space-y-4">
              <a
                href="mailto:vonhathao.it@gmail.com"
                className="group flex items-center gap-4 rounded-lg bg-gray-700/30 p-4 transition-colors hover:bg-gray-700/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 transition-colors group-hover:bg-blue-500/30">
                  <Mail size={24} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-gray-200 transition-colors group-hover:text-blue-400">
                    vonhathao.it@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+84334944908"
                className="group flex items-center gap-4 rounded-lg bg-gray-700/30 p-4 transition-colors hover:bg-gray-700/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 transition-colors group-hover:bg-blue-500/30">
                  <Phone size={24} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-gray-200 transition-colors group-hover:text-blue-400">
                    +84 334 944 908
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-lg bg-gray-700/30 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                  <MapPin size={24} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-gray-200">Hồ Chí Minh, Việt Nam</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
            <h2 className="mb-6 text-2xl font-semibold text-blue-400">Connect With Me</h2>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 rounded-lg bg-gray-700/30 p-4 transition-all hover:scale-105 hover:bg-gray-700/50 ${social.color}`}
                  >
                    <Icon
                      size={24}
                      className="text-gray-300 transition-transform group-hover:scale-110"
                    />
                    <span className="font-medium text-gray-300">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
