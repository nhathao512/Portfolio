import React from 'react';

export const ServiceCard = ({ service }) => (
  <div className="bg-gray-700 rounded-xl p-6">
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{service.icon}</div>
      <div>
        <h3 className="font-semibold mb-2">{service.title}</h3>
        <p className="text-sm text-gray-400">{service.description}</p>
      </div>
    </div>
  </div>
);