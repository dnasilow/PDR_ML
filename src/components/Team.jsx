import { Button } from './ui/button.jsx';
import {
  Mail,
  Award,
  GraduationCap,
  Briefcase,
  Car,
  Star,
  CheckCircle,
  Phone
} from 'lucide-react';

const Team = () => {
  const owner = {
    name: 'Maciej Linosz',
    role: 'Owner & Master PDR Technician',
    experience: '15+ years',
    specialisation: 'Paintless Dent Repair & Hail Damage',
    qualifications: [
      'Certified Master PDR Technician',
      'European PDR Training & Certification',
      'Specialist in Hail Damage Repair',
      'Advanced Paintless Repair Techniques'
    ],
    bio: 'Maciej brings over 15 years of specialized European experience in Paintless Dent Repair to Aberdeenshire. Having trained extensively across Europe, he has mastered the art of PDR on thousands of vehicles - from minor dings to complex hail damage repairs. His commitment to preserving your vehicle\'s original factory finish while delivering flawless results has earned him an outstanding reputation for quality and customer satisfaction.',
    services: [
      'Minor dents & dings (pothole-type damage)',
      'Hail damage repair (all sizes)',
      'Parking lot damage',
      'Kick and impact damage',
      'Minor collision & scrape repair',
      'All vehicle types: Cars, Vans, SUVs, Jeeps'
    ],
    achievements: [
      '1000+ successful repairs completed',
      '15+ years of European PDR experience',
      '99% customer satisfaction rate',
      'Specialist in complex hail damage'
    ],
    image: '/images/team/maciej-linosz.jpg',
    email: 'Dent.Master.Aberdeenshire@gmail.com',
    phone: '+44 7763459923'
  };

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Meet Your PDR Expert
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personal service from a master craftsman with 15+ years of European PDR experience.
            When you choose Dent Master Aberdeenshire, you work directly with Maciej.
          </p>
        </div>

        {/* Owner Profile - Featured */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-2/5 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-12 relative overflow-hidden">
                <img 
                  src="/images/maciej-linosz.jpg"
                  alt="Maciej Linosz - Owner & Master PDR Technician"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    // Show fallback
                    const fallback = document.createElement('div');
                    fallback.className = 'text-center w-full';
                    fallback.innerHTML = `
                      <div class="w-48 h-48 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                        <svg class="h-24 w-24 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                      </div>
                      <div class="text-white">
                        <p class="text-sm font-semibold mb-2">Add Professional Photo</p>
                        <p class="text-xs opacity-80">Place image at: /public/images/maciej-linosz.jpg</p>
                      </div>
                    `;
                    e.target.parentElement.appendChild(fallback);
                  }}
                />
              </div>

              {/* Content */}
              <div className="md:w-3/5 p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {owner.name}
                  </h3>
                  <p className="text-xl text-orange-500 font-semibold mb-1">
                    {owner.role}
                  </p>
                  <p className="text-gray-600">
                    {owner.experience} of Experience • {owner.specialisation}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {owner.bio}
                  </p>
                </div>

                {/* Qualifications */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 text-orange-500 mr-2" />
                    Qualifications & Certifications
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {owner.qualifications.map((qual, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                  <a
                    href={`mailto:${owner.email}`}
                    className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    <span className="text-sm">Email Me</span>
                  </a>
                  <a
                    href={`tel:${owner.phone}`}
                    className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="text-sm">Call Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Achievements Grid */}
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
          {/* Services Provided */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Briefcase className="h-6 w-6 text-orange-500 mr-2" />
              Services I Provide
            </h4>
            <ul className="space-y-2">
              {owner.services.map((service, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="h-1.5 w-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Star className="h-6 w-6 text-orange-500 mr-2" />
              Track Record
            </h4>
            <ul className="space-y-3">
              {owner.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Restore Your Vehicle?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get in touch today for a free quote. I'll personally assess your vehicle's damage 
            and provide honest advice on the best repair approach.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white" size="lg">
            Request Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;

