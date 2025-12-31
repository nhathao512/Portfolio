import { ProfileAvatar } from "./ProfileAvatar";
import { ContactInfo } from "./ContactInfo";
import { SocialLinks } from "./SocialLinks";
import { Download } from "lucide-react";

export const Sidebar = ({ profile }) => (
  <div className="space-y-6 md:col-span-1">
    {/* Profile Card */}
    <div className="rounded-2xl bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm">
      <ProfileAvatar name={profile.name} title={profile.title} imageUrl={profile.imageUrl} />

      {/* Quick Stats */}
      <div className="mb-6 grid grid-cols-2 gap-3 border-t border-gray-700/50 pt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">6+</div>
          <div className="text-xs text-gray-400">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">15+</div>
          <div className="text-xs text-gray-400">Tech Stack</div>
        </div>
      </div>

      {/* Download Resume Button */}
      <a
        href="#"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-600 hover:shadow-xl"
      >
        <Download size={18} />
        <span>Download Resume</span>
      </a>
    </div>

    {/* Contact Info Card */}
    <div className="rounded-2xl bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm">
      <h3 className="mb-4 text-lg font-semibold text-blue-400">Contact Info</h3>
      <ContactInfo contact={profile.contact} />
    </div>

    {/* Social Links Card */}
    <div className="rounded-2xl bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm">
      <h3 className="mb-4 text-lg font-semibold text-blue-400">Connect</h3>
      <SocialLinks />
    </div>
  </div>
);
