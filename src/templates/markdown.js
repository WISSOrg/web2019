import { graphql } from 'gatsby';
import { Link } from "gatsby"
import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/footer';
import { Container, Divider, Header, Segment } from 'semantic-ui-react';

const Template = ({data}) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  const { title } = frontmatter;

  return (
    <div>
      <Segment inverted textAlign='center' vertical>
        <Container text style={{ paddingTop: '300px', paddingBottom: '300px' }}>
          <Header as='h1' inverted>WISS 2019</Header>
          <Header as='h2' inverted>第27回インタラクティブシステムとソフトウェアに関するワークショップ</Header>
        </Container>
      </Segment>
      <Container>
        <Helmet title={`${title} - WISS 2019`}/>
        <Link to="/">Home</Link> / <Link to="/call-for-papers">Call for Papers</Link>
        <Divider />
        <div dangerouslySetInnerHTML={{__html: html}}/>
        <Divider />
      </Container>
      <Footer />
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
