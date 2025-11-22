import React, { useState } from 'react';
import { Button } from './ui/button.jsx';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowLeft,
  Camera
} from 'lucide-react';

const Quote = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Upload images/videos to Cloudinary (free tier: 25GB storage, 25GB bandwidth/month)
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setIsUploading(true);
    const uploadedUrls = [];

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'pdr_quotes'); // Must match preset name you created
        formData.append('folder', 'pdr_quote_media'); // Your folder name

        // Upload to Cloudinary with your cloud name
        const response = await fetch('https://api.cloudinary.com/v1_1/dl1oyyiun/image/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (data.secure_url) {
          uploadedUrls.push({
            url: data.secure_url,
            thumbnail: data.thumbnail_url || data.secure_url,
            public_id: data.public_id
          });
        }
      }

      setUploadedImages([...uploadedImages, ...uploadedUrls]);
      alert(`${uploadedUrls.length} file(s) uploaded successfully!`);
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files. Please try again or email them directly to Dent.Master.Aberdeenshire@gmail.com');
    } finally {
      setIsUploading(false);
    }
  };

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
            <input type="hidden" name="_to" value="Dent.Master.Aberdeenshire@gmail.com" />
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

            {/* Photo/Video Upload Section */}
            <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 bg-orange-50">
              <div className="flex items-start space-x-4">
                <Camera className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Upload Photos or Videos of the Damage
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Clear photos or videos help us provide the most accurate quote. Include close-ups and wider angles showing the damaged area.
                  </p>
                  
                  <label className="inline-block">
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleImageUpload}
                      disabled={isUploading}
                      className="hidden"
                      id="file-upload"
                    />
                    <span className="inline-flex items-center px-4 py-2 border border-orange-600 text-orange-600 rounded-md hover:bg-orange-600 hover:text-white transition-colors cursor-pointer">
                      <Camera className="w-5 h-5 mr-2" />
                      {isUploading ? 'Uploading...' : 'Choose Files'}
                    </span>
                  </label>

                  {uploadedImages.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-green-700 mb-2">
                        ✓ {uploadedImages.length} file(s) uploaded successfully
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {uploadedImages.map((img, index) => (
                          <div key={index} className="relative group">
                            <img 
                              src={img.thumbnail} 
                              alt={`Upload ${index + 1}`}
                              className="w-full h-20 object-cover rounded border border-gray-200"
                            />
                          </div>
                        ))}
                      </div>
                      <input 
                        type="hidden" 
                        name="uploaded_images" 
                        value={JSON.stringify(uploadedImages.map(img => img.url))}
                      />
                    </div>
                  )}

                  <p className="text-xs text-gray-500 mt-3">
                    {isUploading ? '⏳ Uploading to Cloudinary...' : 'Files uploaded to Cloudinary (free & secure). Links will be sent in the email.'}
                  </p>
                </div>
              </div>
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
