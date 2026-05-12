import { Mail, MapPin, Phone } from "lucide-react";

export const ContactInfo = ({ contact }) => (
  <div className="w-full space-y-3">
    <a
      href={`mailto:${contact.email}`}
      className="group flex min-w-0 items-center gap-3 text-gray-300 transition-colors hover:text-cyan-300"
    >
      <Mail
        size={18}
        className="shrink-0 text-cyan-300 transition-transform group-hover:scale-110"
      />
      <span className="truncate text-sm">{contact.email}</span>
    </a>
    <a
      href={`tel:${contact.phone.replace(/\s/g, "")}`}
      className="group flex min-w-0 items-center gap-3 text-gray-300 transition-colors hover:text-cyan-300"
    >
      <Phone
        size={18}
        className="shrink-0 text-cyan-300 transition-transform group-hover:scale-110"
      />
      <span className="text-sm">{contact.phone}</span>
    </a>
    <div className="flex min-w-0 items-center gap-3 text-gray-300">
      <MapPin size={18} className="shrink-0 text-cyan-300" />
      <span className="text-sm">{contact.location}</span>
    </div>
  </div>
);
