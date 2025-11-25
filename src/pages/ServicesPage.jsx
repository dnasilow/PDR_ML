import SEO from '../components/SEO';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Professional PDR Services in Aberdeenshire"
        description="Comprehensive Paintless Dent Repair services including hail damage repair, door dings, scratch removal, and collision dent repair. Over 15 years of European expertise serving Fraserburgh, Aberdeen, Peterhead, and across Aberdeenshire, Scotland."
        keywords="PDR services Scotland, hail damage repair Aberdeenshire, door dings removal, scratch removal, paintless dent repair Fraserburgh, mobile dent repair Aberdeen, car dent repair Peterhead, dent removal Scotland, PDR specialist Aberdeenshire"
        url="https://dentmaster-aberdeenshire.com/services"
      />
      <div className="pt-20">
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;
