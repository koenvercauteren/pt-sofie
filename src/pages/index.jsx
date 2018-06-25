import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage, injectIntl } from 'react-intl';

const IndexPage = ({ data }) => (
  <div>
    <Link to="/page-2/">{<FormattedMessage id="test" />}</Link>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default injectIntl(IndexPage);

export const query = graphql`
  query IndexPageQuery {
    markdownRemark(frontmatter: { url: { eq: "url" } }) {
      html
      frontmatter {
        title
        description
        url
      }
    }
  }
`;
