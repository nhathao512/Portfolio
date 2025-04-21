import { Phone, Mail, MapPin } from "lucide-react";

export const ContactInfo = ({ contact }) => (
  <div className="w-full space-y-4">
    <div className="flex items-center space-x-3">
      <Mail size={16} className="text-cyan-400" />
      <span className="text-sm">{contact.email}</span>
    </div>
    <div className="flex items-center space-x-3">
      <Phone size={16} className="text-cyan-400" />
      <span className="text-sm">{contact.phone}</span>
    </div>
    <div className="flex items-center space-x-3">
      <MapPin size={16} className="text-cyan-400" />
      <span className="text-sm">{contact.location}</span>
    </div>
  </div>
);
