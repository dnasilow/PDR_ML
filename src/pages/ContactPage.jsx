import SEO from '../components/SEO';
import Quote from '../components/Quote';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact Us & Get Free PDR Quote - Dent Master Aberdeenshire"
        description="Get a free, no-obligation quote for Paintless Dent Repair in Aberdeenshire. Located at 92 Charlotte St, Fraserburgh AB43 9JH. Call +44 7763459923 or request a quote online with photos. Mobile service available across Scotland."
        keywords="free PDR quote Scotland, contact dent repair Fraserburgh, mobile dent repair quote Aberdeenshire, PDR estimate Aberdeen, car dent repair contact Peterhead, paintless dent repair quote Scotland, emergency dent repair contact"
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
