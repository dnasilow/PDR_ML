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
        <Quote />
        
        {/* Contact Information Section */}
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
