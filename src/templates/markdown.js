import { graphql } from 'gatsby';
import { Link } from "gatsby"
import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/footer';
import { Container } from 'semantic-ui-react';

const Template = ({data}) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  const { title } = frontmatter;

  return (
    <Container>
      <Helmet title={`${title} - WISS 2019`}/>
      <Link to="/">Home</Link> / <Link to="/call-for-papers">Call for Papers</Link>
      <div dangerouslySetInnerHTML={{__html: html}}/>
      <Footer />
    </Container>
  );
};

export const pageQuery = graphql`
  query PageByPath($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        excerpt
      }
    }
  }
`;

export default Template;
