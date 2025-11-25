import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Dent Master Aberdeenshire - Professional Paintless Dent Repair in Scotland',
  description = 'Expert Paintless Dent Repair (PDR) services in Fraserburgh, Aberdeen, and across Aberdeenshire, Scotland. Over 15 years of European experience. Mobile service available. Specialising in hail damage, door dings, and scratch removal.',
  keywords = 'paintless dent repair Scotland, PDR Aberdeenshire, dent removal Fraserburgh, scratch repair Aberdeen, hail damage repair Scotland, car dent repair Peterhead, mobile PDR Scotland, European dent specialist',
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
      <meta name="language" content="en-GB" />
      <meta name="author" content="Dent Master Aberdeenshire" />
      <meta name="geo.region" content="GB-ABD" />
      <meta name="geo.placename" content="Fraserburgh, Aberdeenshire, Scotland" />
      <meta name="geo.position" content="57.6919;-2.0052" />
      <meta name="ICBM" content="57.6919, -2.0052" />
      <link rel="canonical" href={url} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#f97316" />
      <meta name="msapplication-TileColor" content="#f97316" />
    </Helmet>
  );
};

export default SEO;
