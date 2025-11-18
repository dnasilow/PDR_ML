import { useState } from 'react';

const Gallery = () => {
  // Your actual professional PDR images
  const workImages = [
    {
      src: '/images/before_after.webp',
      title: 'Before & After Results',
      category: 'Dent Removal'
    },
    {
      src: '/images/luxury-bmw.jpg',
      title: 'BMW Luxury Repair',
      category: 'Premium Vehicles'
    },
    {
      src: '/images/AdobeStock_290218585-scaled.jpeg',
      title: 'Professional PDR Work',
      category: 'Paintless Repair'
    },
    {
      src: '/images/luxury-audi.jpg',
      title: 'Audi Excellence',
      category: 'Luxury Service'
    },
    {
      src: '/images/service-paintless-1.jpg',
      title: 'Service Excellence',
      category: 'PDR Service'
    },
    {
      src: '/images/paintlessdentrepair2.jpg',
      title: 'Precision Repair',
      category: 'Expert Technique'
    },
    {
      src: '/images/pdr-img-updated.jpg',
      title: 'Updated PDR Methods',
      category: 'Modern Techniques'
    },
    {
      src: '/images/3558-hero-what-to-know-paintless-dent-repair.avif',
      title: 'PDR Knowledge',
      category: 'Professional Service'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality and precision of our paintless dent repair services. Every repair is a testament to our expertise and commitment to excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Hover Overlay with UI - Matching your design style */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-orange-400 text-sm font-semibold mb-1">{image.category}</div>
                  <div className="text-white text-xl font-bold">{image.title}</div>
                </div>
              </div>

              {/* Always Visible Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-white text-lg font-semibold">{image.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to restore your vehicle to like-new condition?</p>
          <a 
            href="#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
