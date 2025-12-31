import { ProfileAvatar } from "./ProfileAvatar";
import { ContactInfo } from "./ContactInfo";
import { SocialLinks } from "./SocialLinks";
import { Download } from "lucide-react";

export const Sidebar = ({ profile }) => (
  <div className="md:col-span-1 space-y-6">
    {/* Profile Card */}
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <ProfileAvatar
        name={profile.name}
        title={profile.title}
        imageUrl={profile.imageUrl}
      />

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6 pt-6 border-t border-gray-700/50">
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
        className="w-full inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
      >
        <Download size={18} />
        <span>Download Resume</span>
      </a>
    </div>

    {/* Contact Info Card */}
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-blue-400 mb-4">Contact Info</h3>
      <ContactInfo contact={profile.contact} />
    </div>

    {/* Social Links Card */}
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-blue-400 mb-4">Connect</h3>
      <SocialLinks />
    </div>
  </div>
);
