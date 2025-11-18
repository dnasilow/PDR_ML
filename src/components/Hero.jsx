import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const benefits = [
    'Preserves original paintwork and vehicle value',
    'Faster repair times compared to traditional methods',
    'Cost-effective solutions for all types of dents',
    'Expert technicians with international certifications'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Luxury Car Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/luxury-car-hero.jpg" 
          alt="Luxury Vehicle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Car, <span className="text-orange-500">Like New</span>
              </h1>
              <p className="text-xl text-gray-200">
                Expert paintless dent repair across Scotland. Save time, save money, preserve your vehicle's original paintwork with our professional PDR techniques.
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
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#gallery" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md text-lg font-medium inline-flex items-center justify-center transition-colors">
                View Our Work
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

          {/* Right Column - PDR Work Image with UI Overlay */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Larger, more visible photo */}
              <img 
                src="/images/Paintless-Dent-Repair.jpg" 
                alt="PDR Technician at Work" 
                className="rounded-xl shadow-2xl w-full h-[600px] object-cover"
              />
              {/* Smaller, compact text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-900/95 to-transparent rounded-b-xl p-6 text-center">
                <div className="text-orange-300 text-4xl font-bold mb-2">PDR</div>
                <div className="text-xl font-semibold text-white mb-1">Paintless Dent Repair</div>
                <div className="text-gray-100 text-sm">Professional • Non-invasive • Cost-effective</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
