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
      description: 'I strive for excellence in every repair, delivering flawless results that restore your vehicle to its original condition.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'I conduct business with complete honesty and transparency, building trust through clear communication and ethical service.'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'You work directly with me - no middlemen. I take personal responsibility for every repair and customer relationship.'
    },
    {
      icon: Award,
      title: 'Craftsmanship',
      description: 'With 15+ years of European training, I bring master-level PDR techniques to every vehicle I repair.'
    }
  ];

  const achievements = [
    { number: '1000s+', label: 'Repairs Completed' },
    { number: '15+', label: 'Years of Experience' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '100%', label: 'Expert Craftsmanship' }
  ];

  const certifications = [
    'Certified Master PDR Technician',
    'Extensive European PDR Training',
    'Specialist in Paintless Dent Removal',
    'Expert in Hail Damage Repair'
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            About Dent Master Aberdeenshire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert Paintless Dent Repair services delivered by Maciej Linosz, 
            a master craftsman with over 15 years of European PDR experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                My Story & Mission
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  I'm Maciej Linosz, founder and owner of Dent Master Aberdeenshire. With over 
                  15 years of specialized experience in Paintless Dent Repair (PDR), I've dedicated 
                  my career to mastering the art of restoring vehicles to their original, factory 
                  condition without compromising the paintwork.
                </p>
                <p>
                  My journey began in Europe, where I trained extensively in advanced PDR techniques 
                  and honed my skills on thousands of vehicles. I've worked with passenger cars, 
                  vans, SUVs, and Jeeps - handling everything from minor dings to complex hail 
                  damage repairs. Each repair is a testament to precision craftsmanship and 
                  attention to detail.
                </p>
                <p>
                  Now serving the Aberdeenshire community, I bring European expertise and a personal 
                  commitment to quality. When you choose Dent Master Aberdeenshire, you're working 
                  directly with an experienced professional who takes pride in every repair and 
                  stands behind the work with a personal guarantee.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">
                My Expertise
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
                Why Choose Dent Master Aberdeenshire?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    15+ years of specialized European PDR experience and training.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Preservation of original factory paintwork, maintaining your vehicle's value.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Personal service - work directly with an experienced master craftsman.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Cost-effective repairs with quick turnaround and minimal vehicle downtime.
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
              My Core Values
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These values guide every repair and customer interaction, ensuring the highest standards of service.
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
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

