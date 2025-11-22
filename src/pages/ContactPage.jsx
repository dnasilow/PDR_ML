import SEO from '../components/SEO';
import Quote from '../components/Quote';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact & Free Quote"
        description="Get a free quote for Paintless Dent Repair. Located at 92 Charlotte St, Fraserburgh. Call +44 7763459923 or request a quote online with photos."
        keywords="free PDR quote, contact dent repair, Fraserburgh car repair, mobile dent repair quote, Aberdeenshire PDR contact"
        url="https://dentmaster-aberdeenshire.com/contact"
      />
      <div className="pt-20">
        {/* Quote Request Section - Prominent at top */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h1>
              <p className="text-xl text-gray-600">
                Submit photos and videos of your vehicle damage and we'll provide a detailed quote within 24 hours
              </p>
            </div>
          </div>
        </section>
        
        <Quote />
        
        {/* Contact Information Section */}
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
