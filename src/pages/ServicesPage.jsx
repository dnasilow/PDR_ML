import SEO from '../components/SEO';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Professional PDR Services"
        description="Comprehensive Paintless Dent Repair services including hail damage repair, door dings, scratch removal, and more. European expertise serving Fraserburgh and Aberdeenshire."
        keywords="PDR services, hail damage repair, door dings, scratch removal, dent repair services, Fraserburgh, Aberdeenshire"
        url="https://dentmaster-aberdeenshire.com/services"
      />
      <div className="pt-20">
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;
