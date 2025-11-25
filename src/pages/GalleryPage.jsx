import SEO from '../components/SEO';
import Gallery from '../components/Gallery';
import CaseStudies from '../components/CaseStudies';

const GalleryPage = () => {
  return (
    <>
      <SEO 
        title="PDR Gallery - Before & After Dent Repair Results in Aberdeenshire"
        description="View our portfolio of successful Paintless Dent Repair transformations. Real before and after results from luxury vehicles (BMW, Audi, Mercedes) and everyday cars across Fraserburgh, Aberdeen, Peterhead, and Aberdeenshire, Scotland."
        keywords="PDR before after photos, dent repair gallery Scotland, car dent removal results, Aberdeenshire PDR portfolio, Fraserburgh dent repair photos, luxury car dent repair, BMW dent repair, Audi PDR, Mercedes dent removal"
        url="https://dentmaster-aberdeenshire.com/gallery"
        image="/images/before_after.webp"
      />
      <div className="pt-20">
        <Gallery />
        <CaseStudies />
      </div>
    </>
  );
};

export default GalleryPage;
