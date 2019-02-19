import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

const Template = ({data}) => {
  const {markdownRemark: post} = data;
  const {frontmatter, html} = post;
  const {title} = frontmatter;

  return (
      <div>
        <Helmet title={`${title} - test site`}/>
        <div dangerouslySetInnerHTML={{__html: html}}/>
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