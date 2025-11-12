import { useState } from 'react';
import {
  Button
} from './ui/button.jsx';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Camera
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carDetails: '',
    city: '',
    damageDescription: '',
    privacyConsent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    // Reset form or show success message
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+44 7123 456789'], // Example number
      description: 'Available 24/7 for critical situations, otherwise Mon-Fri 9:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@pdrprofessional.co.uk'],
      description: 'We respond to all inquiries within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: ['Mobile service across Scotland'],
      description: 'Our technicians are strategically located for rapid response'
    },
    {
      icon: Clock,
      title: 'Emergency Service',
      details: ['24/7 Availability'],
      description: 'For critical situations, we operate around the clock'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Get a Free PDR Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a dent? Send us your details and photos for a quick, no-obligation estimate. 
            Our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Request a Valuation
              </h3>
              <p className="text-gray-700">
                Please fill out the form below. For accurate pricing, attach several photos of the damage from different angles.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-900">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="+44 7123 456789"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-gray-900">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Edinburgh, Glasgow"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="carDetails" className="text-sm font-medium text-gray-900">
                  Car Make, Model, and Year *
                </label>
                <input
                  type="text"
                  id="carDetails"
                  name="carDetails"
                  value={formData.carDetails}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="e.g., Ford Focus 2018"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="damageDescription" className="text-sm font-medium text-gray-900">
                  Description of Damage *
                </label>
                <textarea
                  id="damageDescription"
                  name="damageDescription"
                  value={formData.damageDescription}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  placeholder="Describe the dent(s), their location, and how they occurred..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="photos" className="text-sm font-medium text-gray-900 flex items-center">
                  <Camera className="h-4 w-4 mr-2" />
                  Attach Photos of Damage (Optional)
                </label>
                <input
                  type="file"
                  id="photos"
                  name="photos"
                  accept="image/*"
                  multiple
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                />
                <p className="text-xs text-gray-500">For each dent, please take several photos from different angles.</p>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="privacyConsent" className="text-sm text-gray-700">
                  I agree to the processing of my personal data in accordance with the 
                  <a href="#" className="text-orange-500 hover:underline"> Privacy Policy</a> 
                  and consent to being contacted about repair services.
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white" 
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Request
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Contact Details
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-gray-900">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-700">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">
                    Rapid Response & 24/7 Emergency
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We pride ourselves on responsive communication. You can expect 
                    a detailed response to your inquiry within 24 hours. For critical 
                    situations, our team is available 24 hours a day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

