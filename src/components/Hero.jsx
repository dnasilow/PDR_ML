import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const benefits = [
    'Preserves original paintwork and vehicle value',
    'Faster repair times compared to traditional methods',
    'Cost-effective solutions for all types of dents',
    'Expert technicians with international certifications'
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
          <circle fill="#f97316" cx="200" cy="150" r="50" opacity="0.3" />
          <circle fill="#f97316" cx="800" cy="400" r="80" opacity="0.3" />
          <circle fill="#f97316" cx="1000" cy="200" r="60" opacity="0.3" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Comprehensive Dent Removal<br />
                <span className="text-orange-400">Without Painting</span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-200">
                We are leaders in non-invasive dent removal from car bodies, using advanced PDR and Smart Repair techniques to restore your vehicle to its original, factory shape.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-orange-400 text-xl flex-shrink-0"></span>
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-medium inline-flex items-center justify-center transition-colors">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md text-lg font-medium inline-flex items-center justify-center transition-colors">
                Our Services
              </a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">1000+</div>
                <div className="text-sm text-gray-300 mt-1">Repairs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">15+</div>
                <div className="text-sm text-gray-300 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">99%</div>
                <div className="text-sm text-gray-300 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-12 shadow-2xl">
              <div className="text-orange-400 text-7xl font-bold mb-4">PDR</div>
              <div className="text-2xl font-semibold mb-4">Paintless Dent Repair</div>
              <div className="text-gray-200">Professional  Non-invasive  Cost-effective</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
