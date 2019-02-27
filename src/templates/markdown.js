import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Divider, Segment, Sidebar } from 'semantic-ui-react';
import Masthead from '../components/masthead';
import PageFooter from '../components/pagefooter';
import PageHeader from '../components/pageheader';
import SideMenu from '../components/sidemenu';
import '../styles/markdown.css';

export default class Template extends Component {
  state = {
    visible: false,
  };

  toggleMenu(event) {
    // This is necessary to stop the "onClick" event to be propagatted to the
    // parent DOM's "onClick" event
    event.stopPropagation();

    this.setState({ visible: !this.state.visible });
  }

  hideMenu() {
    this.setState({ visible: false });
  }

  render() {
    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);

    const { markdownRemark: post } = this.props.data;
    const { frontmatter, html } = post;
    const { title, path } = frontmatter;

    const { visible } = this.state;

    return (
      <div>
        <PageHeader toggleMenu={this.toggleMenu} hideMenu={this.hideMenu} />
        { path === "/" ? <Masthead hideMenu={this.hideMenu} /> : null }
        <Sidebar.Pushable as={Segment} style={{ borderWidth: '0px', borderRadius: '0px', margin: '0px' }}>
          <SideMenu animation={true} visible={visible} />
          <Sidebar.Pusher dimmed={visible} onClick={this.hideMenu} >
            <Container style={{ minHeight: '100vh' }}>
              <Helmet title={`${title} - WISS 2019`}/>
              <Divider hidden />
              <Divider />
              <div dangerouslySetInnerHTML={{__html: html}} />
              <Divider hidden />
            </Container>
            <PageFooter />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
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
