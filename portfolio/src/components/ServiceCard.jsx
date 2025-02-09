export const ServiceCard = ({ service }) => (
  <div className="bg-gray-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 shadow-md">
    <div className="flex items-start space-x-4">
      <div className="text-2xl text-cyan-400">{service.icon}</div>
      <div>
        <h3 className="font-semibold text-cyan-300 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-400">{service.description}</p>
      </div>
    </div>
  </div>
);
