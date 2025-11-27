import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBeforePlaying, setIsBeforePlaying] = useState(false);
  const [isAfterPlaying, setIsAfterPlaying] = useState(false);
  
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  // Generate video pairs for folders 1-15
  const videoCases = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    before: `/PDR_Videos/${i + 1}/${i + 1}a.mp4`,
    after: `/PDR_Videos/${i + 1}/${i + 1}b.mp4`
  }));

  // Auto-advance to next video case when both videos finish
  useEffect(() => {
    if (isVideoModalOpen && !isBeforePlaying && !isAfterPlaying) {
      const timer = setTimeout(() => {
        handleNextVideo();
      }, 1000); // 1 second delay before advancing
      return () => clearTimeout(timer);
    }
  }, [isBeforePlaying, isAfterPlaying, isVideoModalOpen]);

  const openVideoModal = (index) => {
    setCurrentVideoIndex(index);
    setIsVideoModalOpen(true);
    setIsBeforePlaying(false);
    setIsAfterPlaying(false);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    if (beforeVideoRef.current) beforeVideoRef.current.pause();
    if (afterVideoRef.current) afterVideoRef.current.pause();
    setIsBeforePlaying(false);
    setIsAfterPlaying(false);
  };

  const handleNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videoCases.length;
    setCurrentVideoIndex(nextIndex);
    setIsBeforePlaying(false);
    setIsAfterPlaying(false);
  };

  const handlePrevVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + videoCases.length) % videoCases.length;
    setCurrentVideoIndex(prevIndex);
    setIsBeforePlaying(false);
    setIsAfterPlaying(false);
  };

  const handleVideoHover = (videoRef, setPlaying) => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleVideoLeave = (videoRef, setPlaying) => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleVideoEnd = (setPlaying) => {
    setPlaying(false);
  };
  // Your actual professional PDR images
  const workImages = [
    {
      src: '/images/before_after.webp',
      title: 'Before & After Results',
      category: 'Dent Removal',
      linkToVideos: true  // This will scroll to video gallery
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
              onClick={() => {
                if (image.linkToVideos) {
                  // Scroll to video gallery section
                  document.getElementById('video-gallery')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
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

      {/* Video Gallery Section */}
      <div id="video-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-20 border-t border-gray-200">
        {/* Video Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Before & After PDR Video Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch real-time transformations of our paintless dent repair work. See how we restore vehicles to perfection without affecting the original paint.
          </p>
        </div>

        {/* Video Grid - Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {videoCases.map((videoCase, index) => (
            <button
              key={videoCase.id}
              onClick={() => openVideoModal(index)}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-video bg-gray-900"
            >
              {/* Video thumbnail - shows first frame */}
              <video
                src={videoCase.before}
                className="w-full h-full object-cover"
                muted
                playsInline
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500 group-hover:bg-orange-600 flex items-center justify-center mb-2 mx-auto transition-colors">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">Case {videoCase.id}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal - Side by Side Comparison */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <div className="relative w-full max-w-7xl">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Case Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
              <p className="text-white font-semibold">
                Case {currentVideoIndex + 1} of {videoCases.length}
              </p>
            </div>

            {/* Video Comparison Container */}
            <div className="grid md:grid-cols-2 gap-4 mt-16">
              {/* Before Video */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-red-500 px-4 py-2 rounded-md">
                  <p className="text-white font-bold text-sm">BEFORE</p>
                </div>
                <video
                  ref={beforeVideoRef}
                  src={videoCases[currentVideoIndex].before}
                  className="w-full rounded-lg shadow-2xl"
                  muted
                  playsInline
                  onMouseEnter={() => handleVideoHover(beforeVideoRef, setIsBeforePlaying)}
                  onMouseLeave={() => handleVideoLeave(beforeVideoRef, setIsBeforePlaying)}
                  onEnded={() => handleVideoEnd(setIsBeforePlaying)}
                  controls
                />
              </div>

              {/* After Video */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-green-500 px-4 py-2 rounded-md">
                  <p className="text-white font-bold text-sm">AFTER</p>
                </div>
                <video
                  ref={afterVideoRef}
                  src={videoCases[currentVideoIndex].after}
                  className="w-full rounded-lg shadow-2xl"
                  muted
                  playsInline
                  onMouseEnter={() => handleVideoHover(afterVideoRef, setIsAfterPlaying)}
                  onMouseLeave={() => handleVideoLeave(afterVideoRef, setIsAfterPlaying)}
                  onEnded={() => handleVideoEnd(setIsAfterPlaying)}
                  controls
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
              onClick={handleNextVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Instructions */}
            <div className="text-center mt-6">
              <p className="text-white/70 text-sm">
                Hover over videos to play • Videos auto-advance when complete • Use arrows or click to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
