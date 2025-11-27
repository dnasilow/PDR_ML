import { Button } from './ui/button.jsx';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Car,
  DollarSign,
  Users,
  Calendar,
  MapPin,
  Gauge
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Fleet Hail Damage Restoration - Glasgow',
      client: 'Glasgow Car Rentals Ltd.',
      industry: 'Automotive Rental',
      location: 'Glasgow',
      duration: '2 weeks',
      challenge: 'A sudden severe hailstorm caused extensive damage to over 50 vehicles in Glasgow Car Rentals\' fleet, leading to significant downtime and potential revenue loss. Traditional body shop repairs were too slow and costly.',
      solution: 'Our PDR Professional Team deployed a dedicated mobile unit to Glasgow Car Rentals\' depot. Utilizing advanced PDR techniques, we meticulously removed all hail damage from the affected vehicles, restoring them to their original condition without the need for repainting. We also assisted with insurance claims documentation.',
      results: [
        { metric: 'Repair Time', value: '70% faster', icon: Gauge, description: 'Compared to traditional body shop methods, significantly reducing vehicle downtime.' },
        { metric: 'Cost Savings', value: '40%', icon: DollarSign, description: 'Achieved substantial cost savings by avoiding repainting and filler.' },
        { metric: 'Vehicle Value Preservation', value: '100%', icon: Car, description: 'Maintained original factory paintwork, preserving vehicle resale value.' }
      ],
      testimonial: "The PDR Professional Team saved our fleet! Their rapid response and exceptional quality of work meant our vehicles were back on the road much faster than we ever anticipated. Their support with the insurance claim was invaluable.",
      clientRole: 'Fleet Manager'
    },
    {
      title: 'Showroom Vehicle Preparation - Edinburgh',
      client: 'Edinburgh Luxury Motors',
      industry: 'Automotive Dealership',
      location: 'Edinburgh',
      duration: '3 days',
      challenge: 'Edinburgh Luxury Motors frequently receives new vehicles with minor transit dents or showroom imperfections that require immediate, high-quality repair before display. Traditional body shop methods were causing delays and additional costs.',
      solution: 'We established a regular on-site PDR service for Edinburgh Luxury Motors. Our technicians visit weekly to address any new dents, ensuring all showroom vehicles are in pristine condition. This partnership guarantees quick turnaround and maintains the vehicles\' original finish.',
      results: [
        { metric: 'Preparation Time', value: '50% reduction', icon: Gauge, description: 'Significantly reduced the time required to prepare vehicles for the showroom floor.' },
        { metric: 'Cost Efficiency', value: '30% savings', icon: DollarSign, description: 'Lowered preparation costs compared to outsourcing to traditional body shops.' },
        { metric: 'Vehicle Presentation', value: 'Flawless', icon: Car, description: 'Ensured all vehicles presented to customers were in immaculate condition.' }
      ],
      testimonial: "The PDR Professional Team is an indispensable partner for our dealership. Their on-site service is incredibly efficient, and the quality of their PDR work is simply unmatched. Our cars always look perfect for our customers.",
      clientRole: 'General Manager'
    },
    {
      title: 'Leasing Fleet Maintenance - Aberdeen',
      client: 'Aberdeen Leasing Solutions',
      industry: 'Automotive Leasing',
      location: 'Aberdeen',
      duration: 'Ongoing contract',
      challenge: 'Aberdeen Leasing Solutions needed a reliable and cost-effective partner to manage minor bodywork damages on their returned lease vehicles. Maintaining high standards for vehicle condition was crucial for remarketing and customer satisfaction.',
      solution: 'We entered into an ongoing contract to provide PDR and Smart Repair services for their returned lease vehicles. Our team conducts regular inspections and performs necessary repairs, ensuring vehicles meet high standards for their next lease or sale. This proactive approach minimizes end-of-lease charges and maximizes vehicle value.',
      results: [
        { metric: 'Remarketing Value', value: 'Increased by 15%', icon: DollarSign, description: 'Improved the average remarketing value of returned lease vehicles.' },
        { metric: 'Repair Costs', value: 'Reduced by 35%', icon: DollarSign, description: 'Significant reduction in overall repair and reconditioning costs.' },
        { metric: 'Customer Satisfaction', value: 'Improved', icon: Users, description: 'Reduced disputes over end-of-lease damage charges, enhancing customer relations.' }
      ],
      testimonial: "Our partnership with the PDR Professional Team has been a game-changer. Their efficient and high-quality repairs on our lease returns have not only saved us money but also significantly improved our customer satisfaction. Highly recommended!",
      clientRole: 'Operations Director'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our PDR Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped automotive businesses and individuals 
            restore their vehicles to perfection with our expert PDR services.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-md"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                        {study.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-orange-500" />
                        {study.duration}
                      </div>
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {study.title}
                    </h3>
                    <p className="text-lg text-gray-700">
                      Client: {study.client}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Challenge</h4>
                      <p className="text-gray-700 text-sm">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Solution</h4>
                      <p className="text-gray-700 text-sm">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-orange-50 rounded-lg p-6">
                    <blockquote className="text-gray-800 italic mb-3">
                      "{study.testimonial}"
                    </blockquote>
                    <cite className="text-gray-600 text-sm font-medium">
                      — {study.clientRole}, {study.client}
                    </cite>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Key Results
                  </h4>
                  <div className="space-y-4">
                    {study.results.map((result, resultIndex) => {
                      const IconComponent = result.icon;
                      return (
                        <div 
                          key={resultIndex}
                          className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm"
                        >
                          <div className="flex items-center justify-center mb-2">
                            <IconComponent className="h-5 w-5 text-orange-500" />
                          </div>
                          <div className="text-2xl font-bold text-orange-500 mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.metric}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{result.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-orange-50 rounded-2xl p-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Ready to Restore Your Vehicle's Perfection?
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Contact us today for a free estimate and experience the PDR Professional Team difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get a Free Quote
                </Button>
              </Link>
              <Link to="/gallery#video-gallery">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  View All Realizations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

