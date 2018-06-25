import React from 'react';
import Link from 'gatsby-link';
import { FormattedMessage, injectIntl } from 'react-intl';

const IndexPage = () => (
  <div>
    <Link to="/page-2/">{<FormattedMessage id="test" />}</Link>
  </div>
);

export default injectIntl(IndexPage);
