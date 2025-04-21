import Logo_FB from "../assets/logo-fb.png";
import Logo_IG from "../assets/logo-insta.png";
import Logo_LI from "../assets/logo-linkedin.png";
import Logo_GH from "../assets/logo-github.png";

export const SocialLinks = () => (
  <div className="flex space-x-4 mt-6 justify-center">
    <a
      href="https://github.com/nhathao512"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200"
    >
      <img src={Logo_GH} alt="GitHub" className="w-6 h-6 cursor-pointer" />
    </a>
    <a
      href="https://www.facebook.com/vo.nhathao.512"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200"
    >
      <img src={Logo_FB} alt="Facebook" className="w-6 h-6 cursor-pointer" />
    </a>
    <a
      href="https://www.linkedin.com/in/vo-nhat-hao/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200"
    >
      <img src={Logo_LI} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
    </a>
    <a
      href="https://www.instagram.com/vo.nhathao.512/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200"
    >
      <img src={Logo_IG} alt="Instagram" className="w-6 h-6 cursor-pointer" />
    </a>
  </div>
);
