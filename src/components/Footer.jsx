import { Button } from './ui/button.jsx'
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
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Our Team', href: '#team' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
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
                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="ml-3 text-xl font-bold">
                  Scotland Business Solutions
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Scotland's leading provider of comprehensive business services. 
                We deliver innovative solutions that drive growth, efficiency, 
                and success for businesses across all sectors.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+44 131 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">info@scotlandbusiness.co.uk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-gray-300">
                  <div>123 Princes Street, Edinburgh EH2 4AD</div>
                  <div>456 Buchanan Street, Glasgow G1 2FF</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-gray-300 hover:text-white hover:bg-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-gray-300 hover:text-white hover:bg-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-gray-300 hover:text-white hover:bg-primary">
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
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
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
              © 2024 Scotland Business Solutions Ltd. All rights reserved.
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
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div>
                <h5 className="font-medium text-gray-300 mb-2">Company Registration</h5>
                <p>Scotland Business Solutions Ltd</p>
                <p>Company No: SC123456</p>
                <p>VAT No: GB123456789</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-300 mb-2">Professional Bodies</h5>
                <p>Institute of Chartered Accountants of Scotland</p>
                <p>Chartered Institute of Personnel and Development</p>
                <p>Law Society of Scotland</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-300 mb-2">Certifications</h5>
                <p>ISO 9001:2015 Quality Management</p>
                <p>ISO 27001:2013 Information Security</p>
                <p>Investors in People Gold Standard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

