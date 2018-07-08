import React from 'react';
import PropTypes from 'prop-types';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import nl from 'react-intl/locale-data/nl';
import 'intl';

import i18n from '../i18n';

import SeoTags from '../components/seo-tags';

import '../styles/style.scss';

addLocaleData([...nl, ...en]);

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'nl',
    };
  }

  componentDidMount() {
    this.setState({ locale: i18n.getCurrentLangKey() });
  }

  render() {
    const { children } = this.props;
    const { locale } = this.state;

    return (
      <IntlProvider locale={locale} messages={i18n.messages[locale]}>
        <div>
          <SeoTags />
          {children()}
        </div>
      </IntlProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
