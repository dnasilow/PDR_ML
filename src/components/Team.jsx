import { Button } from './ui/button.jsx';
import {
  Linkedin,
  Mail,
  Award,
  GraduationCap,
  Briefcase,
  Car,
  Star
} from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Pawel Kowalski',
      role: 'Lead PDR Technician & Trainer',
      experience: '15+ years',
      specialisation: 'Advanced PDR & Hail Damage Repair',
      qualifications: ['Certified Master PDR Technician (PDR Nation)', 'Advanced Smart Repair Certification'],
      bio: 'Pawel is a highly experienced PDR technician and trainer, with over 15 years in the industry. He has perfected the art of dent removal using both PDR and Smart Repair techniques, and is renowned for his expertise in complex hail damage repairs. Pawel actively participates in international PDR competitions, consistently achieving top results.',
      achievements: ['Winner, International PDR Competition 2023', 'Trained over 100 PDR technicians'],
      image: '/images/team/pawel-kowalski.jpg',
      email: 'pawel.kowalski@pdrprofessional.co.uk',
      linkedin: 'https://linkedin.com/in/pawelkowalski'
    },
    {
      name: 'Anna Nowak',
      role: 'Senior PDR Technician & Quality Manager',
      experience: '10+ years',
      specialisation: 'Quality Control & Customer Satisfaction',
      qualifications: ['Certified PDR Technician (Vale Training Solutions)', 'Automotive Quality Management Certification'],
      bio: 'Anna ensures every repair meets our stringent quality standards. With over a decade of PDR experience, she combines technical precision with an unwavering commitment to customer satisfaction. Anna is also adept at managing insurance claims, making the repair process seamless for clients.',
      achievements: ['Managed quality for 5000+ repairs', 'Instrumental in achieving 98% client satisfaction rate'],
      image: '/images/team/anna-nowak.jpg',
      email: 'anna.nowak@pdrprofessional.co.uk',
      linkedin: 'https://linkedin.com/in/annanowak'
    },
    {
      name: 'Tomasz Zielinski',
      role: 'Mobile PDR Specialist',
      experience: '8+ years',
      specialisation: 'On-Site & Fleet PDR Services',
      qualifications: ['Certified PDR Technician (ARC PDR Training)', 'Mobile Automotive Repair Specialist'],
      bio: 'Tomasz is our go-to expert for mobile PDR services, bringing convenience and high-quality repairs directly to our clients. His efficiency and precision make him invaluable for fleet maintenance and on-site repairs, ensuring minimal disruption to business operations.',
      achievements: ['Successfully completed 2000+ mobile repairs', 'Key contributor to fleet service expansion'],
      image: '/images/team/tomasz-zielinski.jpg',
      email: 'tomasz.zielinski@pdrprofessional.co.uk',
      linkedin: 'https://linkedin.com/in/tomaszzielinski'
    },
    {
      name: 'Katarzyna Wojcik',
      role: 'Customer Relations & Logistics',
      experience: '7+ years',
      specialisation: 'Client Communication & Scheduling',
      qualifications: ['Customer Service Professional Certification', 'Logistics & Operations Diploma'],
      bio: 'Katarzyna is the friendly voice and organizational backbone of our team, ensuring smooth communication and efficient scheduling for all our clients. Her dedication to excellent contact and rapid response times makes the repair process stress-free.',
      achievements: ['Maintained 100% client communication response rate', 'Optimized repair scheduling system'],
      image: '/images/team/katarzyna-wojcik.jpg',
      email: 'katarzyna.wojcik@pdrprofessional.co.uk',
      linkedin: 'https://linkedin.com/in/katarzynawojcik'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Meet Our PDR Professional Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of highly skilled and certified PDR technicians is dedicated to 
            restoring your vehicle's perfection with precision and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-6">
                {/* Profile */}
                <div className="text-center space-y-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-24 w-24 rounded-full mx-auto object-cover border-2 border-orange-500"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-medium">
                      {member.role}
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {member.experience}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialisation */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Specialisation</h4>
                  <p className="text-gray-700 text-sm">
                    {member.specialisation}
                  </p>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Qualifications */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm flex items-center">
                    <GraduationCap className="h-4 w-4 mr-1 text-orange-500" />
                    Key Qualifications
                  </h4>
                  <ul className="space-y-1">
                    {member.qualifications.map((qual, qualIndex) => (
                      <li key={qualIndex} className="text-gray-700 text-xs flex items-start">
                        <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm flex items-center">
                    <Award className="h-4 w-4 mr-1 text-orange-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-700 text-xs flex items-start">
                        <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="flex justify-center space-x-3 pt-4 border-t border-gray-200">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-orange-500 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-md">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-500">1000s+</div>
              <div className="text-gray-700">Repairs Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-500">50+</div>
              <div className="text-gray-700">Years Combined Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-500">10+</div>
              <div className="text-gray-700">Certified Technicians</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-500">99%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-orange-50 rounded-2xl p-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Work with the Best in PDR
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our expert team is ready to restore your vehicle to its original condition. 
              Contact us today to discuss your repair needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Get a Free Quote
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                Meet All Our Technicians
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

