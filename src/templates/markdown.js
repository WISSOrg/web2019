import { graphql } from 'gatsby';
import { Link } from "gatsby"
import React from 'react';
import Helmet from 'react-helmet';
import { Container, Divider } from 'semantic-ui-react';
import PageFooter from '../components/pagefooter';
import PageHeader from '../components/pageheader';

const Template = ({data}) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  const { title, path } = frontmatter;

  return (
    <div>
      <PageHeader main={path === "/"} />
      <Container text>
        <Helmet title={`${title} - WISS 2019`}/>
        <Divider hidden />
        <Link to="/">Home</Link> / <Link to="/call-for-papers">Call for Papers</Link> / Program / About
        <Divider />
        <div dangerouslySetInnerHTML={{__html: html}} />
        <Divider hidden />
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
