import React from 'react';
import { Button } from './ui/button.jsx';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowLeft
} from 'lucide-react';

const Quote = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <button 
            onClick={() => window.location.hash = ''}
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free PDR Quote
          </h1>
          <p className="text-xl text-gray-600">
            Professional paintless dent repair assessment with no obligation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Quote</h2>
          
          <form 
            action="https://formspree.io/f/xdkoqpzq" 
            method="POST"
            className="space-y-6"
          >
            {/* Hidden fields for Formspree */}
            <input type="hidden" name="_to" value="dent.master.aberdeenshire@gmail.com" />
            <input type="hidden" name="_subject" value="New PDR Quote Request from Dent Master Aberdeenshire Website" />

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="+44 7123 456789"
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="e.g., Fraserburgh, Aberdeen"
                />
              </div>
            </div>

            {/* Vehicle Information */}
            <div>
              <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-2">
                Car Make, Model, and Year *
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="e.g., BMW 3 Series 2020, Audi A4 2018"
              />
            </div>

            {/* Damage Description */}
            <div>
              <label htmlFor="damage" className="block text-sm font-medium text-gray-700 mb-2">
                Description of Damage *
              </label>
              <textarea
                id="damage"
                name="damage"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Please describe the dent(s), their location on the vehicle, size (approximate), and how the damage occurred. The more detail you provide, the more accurate our quote will be."
              />
            </div>

            {/* Urgency */}
            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                Repair Urgency
              </label>
              <select
                id="urgency"
                name="urgency"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="normal">Normal (within 1-2 weeks)</option>
                <option value="urgent">Urgent (within 3-5 days)</option>
                <option value="emergency">Emergency (within 24-48 hours)</option>
              </select>
            </div>

            {/* Privacy Consent */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                I agree to the processing of my personal data and consent to being contacted about repair services. *
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md text-lg font-medium"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Quote Request
            </Button>
          </form>

          {/* Contact Information */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Or Contact Us Directly</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">+44 07763459923</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">dent.master.aberdeenshire@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Service Area</p>
                  <p className="font-medium">1-hour radius of Fraserburgh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
