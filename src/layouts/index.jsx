import React from 'react';
import PropTypes from 'prop-types';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import nl from 'react-intl/locale-data/nl';
import 'intl';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import i18n from '../i18n';

import '../styles/style.scss';

addLocaleData([...nl, ...en]);

const theme = createMuiTheme({
  palette: {
    primary: {
      50: '#48B6BF',
      100: '#48B6BF',
      200: '#48B6BF',
      300: '#48B6BF',
      400: '#48B6BF',
      500: '#48B6BF',
      600: '#48B6BF',
      700: '#48B6BF',
      800: '#48B6BF',
      900: '#48B6BF',
      A100: '#48B6BF',
      A200: '#48B6BF',
      A400: '#48B6BF',
      A700: '#48B6BF',
    },
  },
});

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localStorage: undefined,
    };
  }

  componentDidMount() {
    this.setState({ localStorage }); // eslint-disable-line no-restricted-globals
  }

  render() {
    const { children } = this.props;
    const { localStorage } = this.state;
    let locale;

    if (localStorage) {
      locale = localStorage.getItem('locale');
      if (!locale) {
        locale = i18n.DEFAULT_LOCALE;
        localStorage.setItem('locale', locale);
      }
    }

    const currentLocale = i18n.languages.find(lang => lang.startsWith(locale)) || i18n.defaultLocale;

    return (
      <IntlProvider locale={currentLocale} messages={i18n.messages[currentLocale]}>
        <MuiThemeProvider theme={theme}>{children()}</MuiThemeProvider>
      </IntlProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
