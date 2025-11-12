import React from 'react';
import { Car, CloudRain, Wrench, Truck, Building, FileText, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Paintless Dent Repair (PDR)',
      description: 'Non-invasive removal of dents, dings, and creases from car bodies without painting.',
      icon: Car,
      features: ['Preserves original paintwork', 'Faster repair times', 'Cost-effective solution', 'Maintains vehicle value']
    },
    {
      id: 2,
      title: 'Hail Damage Repair',
      description: 'Expert repair of vehicles damaged by hail, restoring them to pre-damage condition using PDR.',
      icon: CloudRain,
      features: ['Comprehensive assessment', 'Advanced PDR techniques', 'Insurance claim assistance', 'Guaranteed quality']
    },
    {
      id: 3,
      title: 'Mobile PDR Service',
      description: 'Convenient on-site dent repair at your home or workplace, minimizing disruption.',
      icon: Truck,
      features: ['On-site repair at your location', 'Flexible scheduling', 'Fully equipped mobile units', 'Same-day service']
    },
    {
      id: 4,
      title: 'Smart Repair Techniques',
      description: 'Specialized small to medium area repair techniques for various cosmetic damages.',
      icon: Wrench,
      features: ['Minor paint scratch repair', 'Bumper scuff removal', 'Alloy wheel refurbishment', 'Fast turnaround']
    },
    {
      id: 5,
      title: 'Fleet PDR Solutions',
      description: 'Tailored dent repair and maintenance services for car fleets, dealerships, and leasing companies.',
      icon: Building,
      features: ['Volume-based pricing', 'Priority scheduling', 'Dedicated account manager', 'Reduced downtime']
    },
    {
      id: 6,
      title: 'Insurance Claim Assistance',
      description: 'Support and guidance through the insurance claim process for vehicle damage repairs.',
      icon: FileText,
      features: ['Damage assessment and reporting', 'Direct liaison with insurers', 'Cashless repair options', 'Expert advice']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive PDR Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full range of Paintless Dent Repair (PDR) and Smart Repair services, designed to restore your vehicle's appearance and value with precision and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <IconComponent className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                {service.features && (
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
