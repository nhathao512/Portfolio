export const ServiceCard = ({ service }) => (
  <div className="rounded-xl bg-gray-700 p-6 shadow-md transition-transform duration-200 hover:scale-105">
    <div className="flex items-start space-x-4">
      <div className="text-2xl text-cyan-400">{service.icon}</div>
      <div>
        <h3 className="mb-2 font-semibold text-cyan-300">{service.title}</h3>
        <p className="text-sm text-gray-400">{service.description}</p>
      </div>
    </div>
  </div>
);
