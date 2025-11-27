import { Link } from 'react-router-dom';
import SEO from './SEO';
import { 
  CheckCircle, 
  DollarSign, 
  Clock, 
  Shield, 
  Paintbrush, 
  Sparkles,
  ArrowRight,
  Ban,
  ThumbsUp
} from 'lucide-react';

const PDRKnowledge = () => {
  const benefits = [
    {
      icon: Paintbrush,
      title: 'Preserves Original Paint',
      description: 'No repainting needed - maintains your vehicle\'s factory finish and warranty.'
    },
    {
      icon: Clock,
      title: 'Faster Repairs',
      description: 'Most repairs completed in hours, not days. Get back on the road quickly.'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Save 50-70% compared to traditional body shop repairs.'
    },
    {
      icon: Shield,
      title: 'Maintains Value',
      description: 'Keeps original paintwork intact, preserving your vehicle\'s resale value.'
    },
    {
      icon: Sparkles,
      title: 'Eco-Friendly',
      description: 'No harmful chemicals, fillers, or paint. Better for the environment.'
    },
    {
      icon: ThumbsUp,
      title: 'Insurance Approved',
      description: 'Preferred method by most insurance companies due to lower costs.'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Assessment',
      description: 'We carefully inspect the damage to determine if PDR is the right solution.'
    },
    {
      step: '2',
      title: 'Access',
      description: 'Gain access to the back of the dented panel, removing interior panels if needed.'
    },
    {
      step: '3',
      title: 'Repair',
      description: 'Using specialized tools, we massage the metal back to its original shape from behind.'
    },
    {
      step: '4',
      title: 'Refinement',
      description: 'Fine-tune the repair with precision tools until the surface is perfectly smooth.'
    },
    {
      step: '5',
      title: 'Quality Check',
      description: 'Thoroughly inspect the repair under proper lighting to ensure factory-quality results.'
    }
  ];

  const whenNotToUse = [
    'Paint is cracked or chipped at the dent location',
    'Metal is stretched beyond repair limits',
    'Dent is on a body line or sharp crease',
    'Panel has previous body filler or repairs',
    'Dent is too shallow (less than 10mm depth)'
  ];

  const idealFor = [
    'Hail damage repairs (multiple small dents)',
    'Door dings from parking lots',
    'Minor collision dents',
    'Creases and larger dents (with proper access)',
    'Dents on bonnets, doors, boots, and roof panels',
    'Insurance claim repairs'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="What is PDR? Paintless Dent Repair Explained - Dent Master Aberdeenshire"
        description="Learn about Paintless Dent Repair (PDR) - the revolutionary method of removing dents without repainting. Discover why PDR is faster, cheaper, and better for your vehicle than traditional body shop repairs. Expert PDR services in Fraserburgh, Aberdeenshire."
        keywords="paintless dent repair, what is PDR, PDR process, PDR vs traditional repair, how PDR works, PDR benefits, dent removal without paint, car dent repair explained, PDR technique, paintless dent removal, Fraserburgh PDR"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              What is Paintless Dent Repair (PDR)?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              PDR is a revolutionary method of removing dents and dings from vehicles without disturbing 
              the original factory paint. It's faster, cheaper, and more eco-friendly than traditional methods.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* What is PDR */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The PDR Process Explained</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                Paintless Dent Repair (PDR) is a specialized technique that removes dents, dings, and minor body 
                creases from vehicles without the need for traditional panel beating, filling, or repainting. 
                This innovative method has revolutionized the automotive repair industry.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Using specialized tools and techniques developed over decades, skilled PDR technicians carefully 
                massage the damaged metal back to its original shape from behind the panel. This process requires 
                extensive training, precision, and patience - but the results are remarkable.
              </p>
              <p className="text-lg leading-relaxed">
                The technique works because modern automotive paint has excellent flexibility. When properly executed, 
                PDR leaves no trace of damage, maintaining the vehicle's factory finish and structural integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PDR?</h2>
            <p className="text-xl text-gray-600">
              Paintless Dent Repair offers numerous advantages over traditional repair methods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Does PDR Work?</h2>
            <p className="text-xl text-gray-600">
              Our systematic approach ensures perfect results every time
            </p>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              PDR vs Traditional Body Shop Repair
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* PDR Column */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-center mb-6">
                  <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4">
                    Paintless Dent Repair
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Repairs completed in hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Original factory paint preserved</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">50-70% cheaper than traditional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">No chemicals or paint needed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Maintains vehicle warranty</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Environmentally friendly</span>
                  </li>
                </ul>
              </div>

              {/* Traditional Column */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-center mb-6">
                  <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold mb-4">
                    Traditional Body Shop
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Ban className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Repairs take days or weeks</span>
                  </li>
                  <li className="flex items-start">
                    <Ban className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Requires repainting</span>
                  </li>
                  <li className="flex items-start">
                    <Ban className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Significantly more expensive</span>
                  </li>
                  <li className="flex items-start">
                    <Ban className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Uses body fillers and chemicals</span>
                  </li>
                  <li className="flex items-start">
                    <Ban className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">May affect warranty</span>
                  </li>
                  <li className="flex items-start">
                    <Ban className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Higher environmental impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use / Not Use */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Ideal For */}
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                PDR is Ideal For:
              </h3>
              <ul className="space-y-3">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Suitable */}
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Ban className="w-8 h-8 text-orange-500 mr-3" />
                PDR May Not Work When:
              </h3>
              <ul className="space-y-3">
                {whenNotToUse.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Restore Your Vehicle?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Get a free, no-obligation quote today. Our expert PDR technicians are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/gallery#video-gallery"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-orange-600 transition-colors"
            >
              Watch Our Work
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PDRKnowledge;
