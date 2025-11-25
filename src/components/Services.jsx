import React from 'react';
import { Crosshair, CloudRain, Car, Wrench, Users, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Minor Dents & Dings',
      description: 'Expert removal of small dents and dings from parking lot incidents, shopping cart impacts, and everyday mishaps.',
      icon: Crosshair,
      image: '/images/service-paintless-1.jpg',
      features: ['Paintless repair method', 'Quick turnaround time', 'Preserves factory finish', 'No repainting needed'],
      vehicles: ['Cars', 'Vans', 'SUVs', 'Jeeps']
    },
    {
      id: 2,
      title: 'Hail Damage Repair',
      description: 'Specialized repair for both small and large hail damage across your vehicle's body panels.',
      icon: CloudRain,
      image: '/images/how-much-does-paintless-dent-repair-cost.jpg.webp',
      features: ['Comprehensive damage assessment', 'Advanced PDR techniques', 'Insurance documentation support', 'Complete restoration'],
      vehicles: ['All vehicle types']
    },
    {
      id: 3,
      title: 'Parking Damage',
      description: 'Fix dents and damage from tight parking spaces, car doors, and parking lot accidents.',
      icon: Car,
      image: '/images/what+is+paintless+dent+removal_.webp',
      features: ['Door dings and dents', 'Panel damage repair', 'Bumper and fender work', 'Same-day service available'],
      vehicles: ['Cars', 'Vans', 'SUVs', 'Jeeps']
    },
    {
      id: 4,
      title: 'Kick & Impact Damage',
      description: 'Repair damage from kicks, impacts, and other forceful contact to vehicle body panels.',
      icon: Wrench,
      image: '/images/paintlessdentrepair2.jpg',
      features: ['Impact dent removal', 'Panel restoration', 'Maintains paint integrity', 'Professional finish'],
      vehicles: ['All vehicle types']
    },
    {
      id: 5,
      title: 'Collision & Scrape Repair',
      description: 'Light cosmetic damage repair from minor collisions, scrapes, and contact with objects.',
      icon: Shield,
      image: '/images/pdr-img-updated.jpg',
      features: ['Minor collision damage', 'Scrape and scuff repair', 'Cosmetic restoration', 'Cost-effective solution'],
      vehicles: ['Cars', 'Vans', 'SUVs', 'Jeeps']
    },
    {
      id: 6,
      title: 'Fleet & Commercial',
      description: 'Specialized PDR services for business fleets, rental companies, and dealerships.',
      icon: Users,
      image: '/images/AdobeStock_290218585-scaled.jpeg',
      features: ['Volume discounts available', 'Priority scheduling', 'Minimize vehicle downtime', 'Professional service'],
      vehicles: ['All commercial vehicles']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional PDR Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Using the advanced PDR (Paintless Dent Removal) system, I repair vehicle damage without 
            repainting - preserving your vehicle's original factory finish and value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Service Image */}
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                
                {/* Card Content */}
                <div className="p-6">
                  <IconComponent className="h-10 w-10 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  {service.features && (
                    <ul className="text-sm text-gray-600 space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                  )}
                  {service.vehicles && (
                    <div className="text-xs text-gray-500 font-semibold mt-4 pt-4 border-t border-gray-200">
                      Suitable for: {service.vehicles.join(' • ')}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            What is PDR (Paintless Dent Removal)?
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            PDR is an advanced repair technique that removes dents and dings without damaging your vehicle's 
            original paint. Using specialized tools, I carefully massage the metal back to its original shape 
            from behind the panel. This method is faster, more cost-effective than traditional body shop repairs, 
            and maintains your vehicle's factory finish and resale value.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <span className="flex items-center">
              <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
              No Repainting
            </span>
            <span className="flex items-center">
              <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
              Factory Finish Preserved
            </span>
            <span className="flex items-center">
              <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
              Quick Turnaround
            </span>
            <span className="flex items-center">
              <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
              Cost-Effective
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
