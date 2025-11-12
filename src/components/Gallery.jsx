import { useState } from 'react';
import { Button } from './ui/button.jsx';
import { 
  Camera, 
  Play, 
  ArrowRight, 
  Filter,
  Grid,
  List
} from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Repairs', count: 24 },
    { id: 'bmw', name: 'BMW', count: 8 },
    { id: 'audi', name: 'Audi', count: 6 },
    { id: 'mercedes', name: 'Mercedes-Benz', count: 5 },
    { id: 'volkswagen', name: 'Volkswagen', count: 3 },
    { id: 'ford', name: 'Ford', count: 2 }
  ];

  // Placeholder gallery items - ready for your actual before/after photos
  const galleryItems = [
    {
      id: 1,
      category: 'bmw',
      title: 'BMW 3 Series - Door Panel Dent',
      description: 'Large dent removal from passenger door without paint damage',
      beforeImage: '/images/placeholder-before.jpg',
      afterImage: '/images/placeholder-after.jpg',
      videoUrl: '/videos/bmw-repair-process.mp4',
      repairType: 'Door Panel PDR',
      duration: '2 hours',
      difficulty: 'Medium'
    },
    {
      id: 2,
      category: 'audi',
      title: 'Audi A4 - Hail Damage Repair',
      description: 'Multiple small dents across bonnet and roof from hail storm',
      beforeImage: '/images/placeholder-before.jpg',
      afterImage: '/images/placeholder-after.jpg',
      videoUrl: '/videos/audi-hail-repair.mp4',
      repairType: 'Hail Damage PDR',
      duration: '4 hours',
      difficulty: 'High'
    },
    {
      id: 3,
      category: 'mercedes',
      title: 'Mercedes C-Class - Boot Lid Dent',
      description: 'Shopping trolley impact dent on boot lid',
      beforeImage: '/images/placeholder-before.jpg',
      afterImage: '/images/placeholder-after.jpg',
      videoUrl: '/videos/mercedes-boot-repair.mp4',
      repairType: 'Boot Panel PDR',
      duration: '1.5 hours',
      difficulty: 'Low'
    },
    {
      id: 4,
      category: 'volkswagen',
      title: 'VW Golf - Side Panel Dent',
      description: 'Car park dent on rear quarter panel',
      beforeImage: '/images/placeholder-before.jpg',
      afterImage: '/images/placeholder-after.jpg',
      videoUrl: '/videos/vw-side-panel.mp4',
      repairType: 'Quarter Panel PDR',
      duration: '3 hours',
      difficulty: 'Medium'
    },
    {
      id: 5,
      category: 'ford',
      title: 'Ford Focus - Bonnet Dent',
      description: 'Impact dent on bonnet from falling branch',
      beforeImage: '/images/placeholder-before.jpg',
      afterImage: '/images/placeholder-after.jpg',
      videoUrl: '/videos/ford-bonnet-repair.mp4',
      repairType: 'Bonnet PDR',
      duration: '2.5 hours',
      difficulty: 'Medium'
    },
    {
      id: 6,
      category: 'bmw',
      title: 'BMW X5 - Multiple Dents',
      description: 'Several small dents along passenger side',
      beforeImage: '/images/placeholder-before.jpg',
      afterImage: '/images/placeholder-after.jpg',
      videoUrl: '/videos/bmw-x5-multiple.mp4',
      repairType: 'Multiple Panel PDR',
      duration: '5 hours',
      difficulty: 'High'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            PDR Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our before and after results organized by car make and model. 
            Each repair showcases our expertise in paintless dent removal.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">View:</span>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-orange-500 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white text-orange-500 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Before/After Images */}
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <Camera className="h-8 w-8 text-gray-400 mx-auto" />
                        <p className="text-sm text-gray-500">Before Photo</p>
                        <p className="text-xs text-gray-400">Your photo here</p>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <Camera className="h-8 w-8 text-gray-400 mx-auto" />
                        <p className="text-sm text-gray-500">After Photo</p>
                        <p className="text-xs text-gray-400">Your photo here</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      AFTER
                    </div>
                  </div>
                </div>
                
                {/* Video Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="h-16 w-16 bg-black/70 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors group">
                    <Play className="h-6 w-6 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Repair Details */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-medium text-gray-900">{item.repairType}</div>
                    <div className="text-gray-500">Type</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-gray-900">{item.duration}</div>
                    <div className="text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-medium ${
                      item.difficulty === 'Low' ? 'text-green-600' :
                      item.difficulty === 'Medium' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {item.difficulty}
                    </div>
                    <div className="text-gray-500">Difficulty</div>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  View Full Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Instructions */}
        <div className="mt-16 bg-orange-50 rounded-2xl p-8 text-center">
          <div className="space-y-4">
            <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <Camera className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Ready to Add Your PDR Work?
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              This gallery structure is ready for your before and after photos. 
              Simply replace the placeholder images with your actual PDR work, 
              organized by car make and model for easy browsing.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <strong>Recommended format:</strong> High-resolution photos showing clear before/after comparison
              </p>
              <p className="text-sm text-gray-600">
                <strong>Video integration:</strong> Process videos can be embedded to show your technique
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
