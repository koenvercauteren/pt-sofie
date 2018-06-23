import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({ description, image, title, url }) => {
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
      <meta property="fb:app_id" content="1675606539207665" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SEO;
