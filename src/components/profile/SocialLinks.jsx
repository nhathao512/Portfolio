const links = [
  { name: "GitHub", href: "https://github.com/nhathao512", icon: "/assets/logo-github.png" },
  {
    name: "Facebook",
    href: "https://www.facebook.com/vo.nhathao.512",
    icon: "/assets/logo-fb.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nhathao512/",
    icon: "/assets/logo-linkedin.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nhathao512_/",
    icon: "/assets/logo-instagram.png",
  },
];

export const SocialLinks = () => (
  <div className="grid grid-cols-4 gap-3">
    {links.map((link) => (
      <a
        key={link.name}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.name}
        title={link.name}
        className="flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10"
      >
        <img src={link.icon} alt="" className="h-6 w-6 object-contain" loading="lazy" />
      </a>
    ))}
  </div>
);
