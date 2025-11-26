import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button.jsx';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowLeft,
  Camera,
  CheckCircle
} from 'lucide-react';

const Quote = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xblqjwno', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitSuccess(true);
        e.target.reset();
        setUploadedImages([]);
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('There was a problem submitting your request. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home - Top Left */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free PDR Quote
          </h1>
          <p className="text-xl text-gray-600">
            Submit photos and videos of your vehicle damage and we'll provide a detailed quote within 24 hours
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Quote Request Submitted Successfully!
                </h3>
                <p className="text-green-800 mb-3">
                  Thank you for your quote request. We've received your information and will review it carefully.
                </p>
                <p className="text-green-800 mb-3">
                  <strong>What happens next?</strong>
                </p>
                <ul className="list-disc list-inside text-green-800 space-y-1 mb-4">
                  <li>We'll assess the damage details you provided</li>
                  <li>You'll receive a detailed quote within 24 hours</li>
                  <li>Our quote will include estimated time and cost</li>
                </ul>
                <p className="text-green-800">
                  If you have urgent questions, call us at <strong>+44 7763459923</strong>
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 text-green-700 hover:text-green-900 font-medium underline"
                >
                  Submit Another Quote Request
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        {!submitSuccess && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Quote</h2>
            
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden fields for Formspree */}
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
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5 mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Quote Request'}
            </Button>
          </form>

          {/* Contact Information */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Or Contact Us Directly</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">+44 07763459923</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-sm break-all">dent.master.aberdeenshire@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Service Area</p>
                  <p className="font-medium">1-hour radius of Fraserburgh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Quote;
