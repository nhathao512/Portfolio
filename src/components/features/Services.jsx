import { ServiceCard } from "../common/ServiceCard";

export const Services = ({ services }) => (
  <div className="rounded-2xl bg-gray-800 p-6 shadow-lg">
    <h2 className="mb-6 text-xl font-bold text-cyan-400">What I&apos;m Doing</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </div>
);
