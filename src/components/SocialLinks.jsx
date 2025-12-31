import Logo_FB from "../assets/logo-fb.png";
import Logo_IG from "../assets/logo-insta.png";
import Logo_LI from "../assets/logo-linkedin.png";
import Logo_GH from "../assets/logo-github.png";

export const SocialLinks = () => (
  <div className="mt-6 flex justify-center space-x-4">
    <a
      href="https://github.com/nhathao512"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200"
    >
      <img src={Logo_GH} alt="GitHub" className="h-6 w-6 cursor-pointer" />
    </a>
    <a
      href="https://www.facebook.com/vo.nhathao.512"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200"
    >
      <img src={Logo_FB} alt="Facebook" className="h-6 w-6 cursor-pointer" />
    </a>
    <a
      href="https://www.linkedin.com/in/nhathao512/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200"
    >
      <img src={Logo_LI} alt="LinkedIn" className="h-6 w-6 cursor-pointer" />
    </a>
    <a
      href="https://www.instagram.com/nhathao512_/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200"
    >
      <img src={Logo_IG} alt="Instagram" className="h-6 w-6 cursor-pointer" />
    </a>
  </div>
);
