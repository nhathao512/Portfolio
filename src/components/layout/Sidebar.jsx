import { Download } from "lucide-react";
import { ContactInfo } from "../profile/ContactInfo";
import { ProfileAvatar } from "../profile/ProfileAvatar";
import { SocialLinks } from "../profile/SocialLinks";

export const Sidebar = ({ profile }) => (
  <aside className="space-y-5 lg:sticky lg:top-28">
    <div className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-6">
      <ProfileAvatar name={profile.name} title={profile.title} imageUrl={profile.imageUrl} />

      <div className="mb-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
        <div className="rounded-lg bg-white/5 p-3 text-center">
          <div className="text-2xl font-bold text-cyan-300">5+</div>
          <div className="text-xs text-gray-400">Projects</div>
        </div>
        <div className="rounded-lg bg-white/5 p-3 text-center">
          <div className="text-2xl font-bold text-amber-300">15+</div>
          <div className="text-xs text-gray-400">Tech Stack</div>
        </div>
      </div>

      <a
        href="/files/CV.pdf"
        download="Vo_Nhat_Hao_CV.pdf"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
      >
        <Download size={18} />
        <span>Download Resume</span>
      </a>
    </div>

    <div className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-6">
      <h3 className="mb-4 text-lg font-semibold text-cyan-300">Contact Info</h3>
      <ContactInfo contact={profile.contact} />
    </div>

    <div className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-6">
      <h3 className="mb-4 text-lg font-semibold text-cyan-300">Connect</h3>
      <SocialLinks />
    </div>
  </aside>
);
