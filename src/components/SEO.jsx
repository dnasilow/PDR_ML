import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Dent Master Aberdeenshire - Professional Paintless Dent Repair',
  description = 'Expert Paintless Dent Repair (PDR) services in Fraserburgh, Aberdeenshire. Over 15 years of European experience. Mobile service available across Scotland.',
  keywords = 'paintless dent repair, PDR, dent removal, scratch repair, hail damage repair, car dent repair, Fraserburgh, Aberdeenshire, Scotland',
  image = '/images/luxury-car-hero.jpg',
  url = 'https://dentmaster-aberdeenshire.com'
}) => {
  const siteTitle = 'Dent Master Aberdeenshire';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="GB-ABD" />
      <meta name="geo.placename" content="Fraserburgh, Aberdeenshire" />
      <meta name="geo.position" content="57.6919;-2.0052" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
