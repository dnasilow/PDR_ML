import { Button } from './ui/button.jsx'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight 
} from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    { name: 'Business Consulting', href: '#' },
    { name: 'Financial Services', href: '#' },
    { name: 'HR Solutions', href: '#' },
    { name: 'Legal & Compliance', href: '#' },
    { name: 'Operations Management', href: '#' },
    { name: 'Documentation Services', href: '#' }
  ]

  const resources = [
    { name: 'Business Strategy Guide', href: '#' },
    { name: 'Financial Toolkit', href: '#' },
    { name: 'HR Handbook', href: '#' },
    { name: 'Compliance Checklist', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Newsletter', href: '#' }
  ]

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR Compliance', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Sitemap', href: '#' }
  ]

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DM</span>
                </div>
                <span className="ml-3 text-xl font-bold">
                  Dent Master Aberdeenshire
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Expert Paintless Dent Repair services in Aberdeenshire. 
                Over 15 years of European experience restoring vehicles to 
                factory condition without repainting.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="tel:+447763459923" className="text-gray-300 hover:text-white transition-colors">
                  +44 7763459923
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:Dent.Master.Aberdeenshire@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  Dent.Master.Aberdeenshire@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                <div className="text-gray-300">
                  <div>92 Charlotte St</div>
                  <div>Fraserburgh</div>
                  <div>AB43 9JH</div>
                  <div className="mt-1 text-sm">Scotland, UK</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-gray-300 hover:text-white hover:bg-orange-500">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="space-y-8">
            {/* Resources */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">Resources</h4>
              <ul className="space-y-3">
                {resources.slice(0, 4).map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Stay Updated</h4>
              <p className="text-gray-300 text-sm">
                Get the latest business insights and resources delivered to your inbox.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © 2025 Dent Master Aberdeenshire. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {legal.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <h5 className="font-medium text-gray-300 mb-2">Business Information</h5>
                <p>Dent Master Aberdeenshire</p>
                <p>Owner: Maciej Linosz</p>
                <p>Est. 2025</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-300 mb-2">Certifications</h5>
                <p>Certified Master PDR Technician</p>
                <p>European PDR Training & Certification</p>
                <p>15+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

