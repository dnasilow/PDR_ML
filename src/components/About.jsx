import { Button } from './ui/button.jsx';
import {
  Award,
  Users,
  Target,
  Heart,
  CheckCircle,
  Car,
  Star
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every repair, delivering flawless results that restore your vehicle\'s original condition.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with complete honesty and transparency, building trust through clear communication and ethical practices.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We believe in building long-term relationships with our clients, working collaboratively to achieve mutual success and satisfaction.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We constantly seek new solutions and tools in paintless repair to continuously improve our services and deliver cutting-edge results.'
    }
  ];

  const achievements = [
    { number: '1000s+', label: 'Repairs Completed' },
    { number: '15+', label: 'Years of Experience' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: 'Certified', label: 'PDR Technicians' }
  ];

  const certifications = [
    'Certified Master PDR Technicians (PDR Nation)',
    'Advanced Smart Repair Certification',
    'International PDR Competition Winners',
    'Automotive Body Repair & Paint Qualification'
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            About PDR Professional Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are leaders in the automotive market for non-invasive dent removal, 
            dedicated to reducing car repair costs and restoring vehicles to perfection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Story & Mission
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  The PDR Professional Team was founded with a clear vision: to revolutionize 
                  automotive body repair by specializing in Paintless Dent Repair (PDR) and 
                  Smart Repair techniques. We are passionate about restoring vehicles to their 
                  original, factory condition without compromising the paintwork.
                </p>
                <p>
                  Our journey has been marked by continuous dedication to mastering the art of 
                  dent removal. We meticulously monitor industry advancements, actively participate 
                  in international competitions, and constantly seek innovative solutions to 
                  enhance our services and deliver unparalleled quality.
                </p>
                <p>
                  Today, we are recognized as a leading team in Poland, striving to expand our 
                  expertise and become a leader in the Western European market. Our commitment 
                  to precision, efficiency, and customer satisfaction drives every repair we undertake.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Certifications & Expertise
              </h4>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200"
                >
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Why Choose PDR Professional Team?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Unmatched expertise in Paintless Dent Repair and Smart Repair techniques.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Preservation of original factory paintwork, maintaining vehicle value.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Efficient, cost-effective repairs with minimal vehicle downtime.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Dedicated support for insurance claims and fleet management.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These values guide every repair and interaction, ensuring the highest standards of service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="h-8 w-8 text-orange-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {value.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white" size="lg">
            Learn More About Our Expertise
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

