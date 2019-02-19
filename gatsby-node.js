/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;
  const template = path.resolve(`src/templates/markdown.js`);

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            date
            path
            title
            excerpt
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({node}, index) => {
      createPage({
        path: node.frontmatter.path,
        component: template,
      });
    });
  });
};