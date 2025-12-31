import { Phone, Mail, MapPin } from "lucide-react";

export const ContactInfo = ({ contact }) => (
  <div className="w-full space-y-3">
    <a
      href={`mailto:${contact.email}`}
      className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
    >
      <Mail
        size={18}
        className="text-blue-400 group-hover:scale-110 transition-transform"
      />
      <span className="text-sm">{contact.email}</span>
    </a>
    <a
      href={`tel:${contact.phone}`}
      className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
    >
      <Phone
        size={18}
        className="text-blue-400 group-hover:scale-110 transition-transform"
      />
      <span className="text-sm">{contact.phone}</span>
    </a>
    <div className="flex items-center space-x-3 text-gray-300">
      <MapPin size={18} className="text-blue-400" />
      <span className="text-sm">{contact.location}</span>
    </div>
  </div>
);
