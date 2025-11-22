import SEO from '../components/SEO';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us - 15+ Years PDR Experience"
        description="Meet the Dent Master Aberdeenshire team. Over 15 years of Paintless Dent Repair experience from Europe, now serving Scotland with precision and excellence."
        keywords="PDR experts, dent repair experience, European PDR technicians, Fraserburgh car repair, Aberdeenshire auto body"
        url="https://dentmaster-aberdeenshire.com/about"
      />
      <div className="pt-20">
        <About />
      </div>
    </>
  );
};

export default AboutPage;
