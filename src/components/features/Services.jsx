import { ServiceCard } from "../common/ServiceCard";

export const Services = ({ services }) => (
  <section className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-6">
    <h2 className="mb-6 text-xl font-bold text-cyan-300">What I&apos;m Doing</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  </section>
);
