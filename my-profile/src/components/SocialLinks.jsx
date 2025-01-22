import { Github, Facebook, Linkedin, Instagram } from "lucide-react";

export const SocialLinks = () => (
  <div className="flex space-x-4 mt-6">
    <a
      href="https://github.com/nhathao512"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      <Github className="w-6 h-6 cursor-pointer" />
    </a>
    <a
      href="https://www.facebook.com/vo.nhathao.512"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      <Facebook className="w-6 h-6 cursor-pointer" />
    </a>
    <a
      href="https://www.linkedin.com/in/nhathao512/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      <Linkedin className="w-6 h-6 cursor-pointer" />
    </a>
    <a
      href="https://www.instagram.com/nhathao512_/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      <Instagram className="w-6 h-6 cursor-pointer" />
    </a>
  </div>
);
