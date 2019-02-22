import { graphql } from 'gatsby';
import { Link } from "gatsby"
import React from 'react';
import Helmet from 'react-helmet';
import PageFooter from '../components/pagefooter';
import PageHeader from '../components/pageheader';
import { Container, Divider } from 'semantic-ui-react';

const Template = ({data}) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  const { title } = frontmatter;

  return (
    <div>
      <PageHeader />
      <Container>
        <Helmet title={`${title} - WISS 2019`}/>
        <Divider />
        <Link to="/">Home</Link> / <Link to="/call-for-papers">Call for Papers</Link>
        <Divider />
        <div dangerouslySetInnerHTML={{__html: html}}/>
        <Divider />
      </Container>
      <PageFooter />
    </div>
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
