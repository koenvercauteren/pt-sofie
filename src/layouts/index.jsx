import React from 'react';
import PropTypes from 'prop-types';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import nl from 'react-intl/locale-data/nl';
import 'intl';

import i18n from '../i18n';

import Header from '../components/header';
import SeoTags from '../components/seo-tags';

addLocaleData([...nl, ...en]);

const Layout = ({ children }) => {
  const locale = i18n.getCurrentLangKey('en');
  return (
    <IntlProvider locale={locale} messages={i18n.messages[locale]}>
      <div>
        <SeoTags />
        <Header />
        {children()}
      </div>
    </IntlProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;

// export const query = graphql``;
