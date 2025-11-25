import { Button } from './ui/button.jsx';
import {
  Download,
  FileText,
  BookOpen,
  Car,
  CloudRain,
  Calendar,
  ArrowRight
} from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: Car,
      title: 'The Ultimate Guide to PDR Technology',
      description: "A comprehensive guide explaining Paintless Dent Repair (PDR) technology, its benefits, and how it preserves your vehicle's original finish.",
      type: 'Guide',
      pages: '30 pages',
      category: 'PDR Technology',
      downloadCount: '3,500+',
      featured: true
    },
    {
      icon: CloudRain,
      title: 'Navigating Hail Damage Insurance Claims',
      description: 'An essential guide for vehicle owners and fleet managers on how to effectively manage insurance claims for hail damage.',
      type: 'Guide',
      pages: '20 pages',
      category: 'Insurance & Claims',
      downloadCount: '2,800+',
      featured: true
    },
    {
      icon: BookOpen,
      title: 'Fleet Vehicle Cosmetic Maintenance Handbook',
      description: 'A practical handbook for fleet managers and car dealerships on maintaining the cosmetic condition of their vehicle fleets.',
      type: 'Handbook',
      pages: '45 pages',
      category: 'Fleet Management',
      downloadCount: '1,900+',
      featured: false
    },
    {
      icon: FileText,
      title: 'PDR Technician Training Insights',
      description: 'An overview of the skills, training, and continuous development required to become a certified PDR technician.',
      type: 'Article',
      pages: '10 pages',
      category: 'Industry Insights',
      downloadCount: '1,200+',
      featured: false
    }
  ];

  const webinars = [
    {
      title: 'Maximizing Profitability: PDR for Car Dealerships',
      date: '2024-04-20',
      time: '10:00 AM GMT',
      duration: '60 minutes',
      presenter: 'Pawel Kowalski, Lead PDR Technician',
      description: 'Learn how car dealerships can integrate PDR services to reduce reconditioning costs, speed up inventory turnover, and enhance customer satisfaction.',
      registered: 250
    },
    {
      title: 'Effective Hail Damage Management for Fleets',
      date: '2024-05-10',
      time: '02:00 PM GMT',
      duration: '45 minutes',
      presenter: 'Anna Nowak, Senior PDR Technician',
      description: 'A webinar for fleet managers on proactive strategies and efficient repair solutions for vehicles affected by hail, minimizing downtime and financial impact.',
      registered: 180
    }
  ];

  const featuredResources = resources.filter(resource => resource.featured);
  const allResources = resources;

  return (
    <section id="resources" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            PDR Knowledge Hub & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of PDR guides, insights, and webinars 
            designed to inform and empower vehicle owners and automotive businesses.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              Featured Guides
            </h3>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              View All Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-orange-500" />
                      </div>
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                        {resource.type}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {resource.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {resource.description}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{resource.pages}</span>
                      <span>{resource.downloadCount} downloads</span>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download Free
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Complete Resource Library
          </h3>

          <div className="space-y-4">
            {allResources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-orange-500" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-gray-900">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {resource.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-600">
                          <span>{resource.type}</span>
                          <span>{resource.pages}</span>
                          <span>{resource.downloadCount} downloads</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Webinars */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Upcoming Webinars
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div 
                key={index}
                className="bg-orange-50 border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Date */}
                  <div className="flex items-center text-orange-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{webinar.date}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {webinar.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {webinar.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Time: {webinar.time}</div>
                    <div>Duration: {webinar.duration}</div>
                    <div>Presenter: {webinar.presenter}</div>
                    <div className="text-orange-500">{webinar.registered} registered</div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-orange-50 rounded-2xl p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Stay Updated with Latest PDR Insights
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to access new guides, 
              tools, and insights that can help you understand and benefit from PDR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-600">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;

