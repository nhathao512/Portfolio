import React from 'react';
import { ServiceCard } from './ServiceCard';

export const Services = ({ services }) => (
  <div className="bg-gray-800 rounded-xl p-6">
    <h2 className="text-xl font-bold mb-6">What I'm Doing</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </div>
);