import { Camera, Code2, Palette, Smartphone } from "lucide-react";

const icons = {
  web: Code2,
  design: Palette,
  mobile: Smartphone,
  photo: Camera,
};

export const ServiceCard = ({ service }) => {
  const Icon = icons[service.icon] ?? Code2;

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5 shadow-xl shadow-slate-950/10 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/10">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
          <Icon size={22} />
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-white">{service.title}</h3>
          <p className="text-sm leading-relaxed text-gray-400">{service.description}</p>
        </div>
      </div>
    </div>
  );
};
