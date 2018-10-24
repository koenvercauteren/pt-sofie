import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import favicon from '../assets/favicon.png';

const SeoTags = ({ data }) => {
  const { description, image, title, url } = data;
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
      <meta property="fb:app_id" content="1675606539207665" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Google Search Console */}
      <meta name="google-site-verification" content="ML291WRN7vPy_tTLianVGdxTZGEpdjkThcjvxki5764" />

      {/* Font Style */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
  );
};

SeoTags.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }),
};

SeoTags.defaultProps = {
  data: {
    description: 'Personal Training aangeboden in groep of individueel',
    image: '',
    title: 'Personal Trainer - Sofie de Backer',
    url: 'https://sofiedb.be',
  },
};

export default SeoTags;
