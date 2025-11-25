import SEO from '../components/SEO';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Dent Master Aberdeenshire - 15+ Years PDR Experience"
        description="Meet Maciej Linosz and the Dent Master Aberdeenshire team. Over 15 years of professional Paintless Dent Repair experience from Europe, now serving Fraserburgh, Aberdeen, and all of Aberdeenshire, Scotland with precision, quality, and excellence."
        keywords="PDR expert Scotland, Maciej Linosz, European PDR technician, experienced dent repair specialist, Fraserburgh car repair professional, Aberdeenshire auto body specialist, mobile PDR technician Scotland"
        url="https://dentmaster-aberdeenshire.com/about"
      />
      <div className="pt-20">
        <About />
      </div>
    </>
  );
};

export default AboutPage;
