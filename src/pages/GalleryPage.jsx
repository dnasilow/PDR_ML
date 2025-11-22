import SEO from '../components/SEO';
import Gallery from '../components/Gallery';
import CaseStudies from '../components/CaseStudies';

const GalleryPage = () => {
  return (
    <>
      <SEO 
        title="Before & After Gallery - PDR Results"
        description="View our portfolio of successful Paintless Dent Repair work. Real results from luxury vehicles and everyday cars across Aberdeenshire."
        keywords="PDR before after, dent repair gallery, car repair results, Aberdeenshire PDR work, Fraserburgh dent repair photos"
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
