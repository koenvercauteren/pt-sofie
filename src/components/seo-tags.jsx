import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import favicon from '../assets/favicon.png';
import sofie from '../assets/img/sofie.jpg';

const GOOGLE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;
const FB_ID = process.env.FB_APP_ID;

const SeoTags = props => {
  const { description, image, title, url } = props;
  const schemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url,
    name: title,
    alternateName: 'Personal Trainer - Sofie de Backer',
  };

  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={FB_ID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Google Search Console */}
      <meta name="google-site-verification" content={GOOGLE_VERIFICATION} />

      {/* Font Style */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
  );
};

SeoTags.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

SeoTags.defaultProps = {
  description:
    "Wil je aan je zelfvertrouwen werken, snel afvallen of spiermassa kweken? Aan de hand van op maat gemaakte trainingsschema's en voedingsschema help ik je je doelen bereiken. Wat voor soort doel je wil bereiken, we zullen altijd de focus leggen op gezondheid en het op de juiste manier uitvoeren.",
  image: `https://www.sofiedb.be${sofie}`,
  title: 'Personal Trainer in Antwerpen - Sofie de Backer',
  url: 'https://www.sofiedb.be',
};

export default SeoTags;
