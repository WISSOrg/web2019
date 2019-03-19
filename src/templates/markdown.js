import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Divider, Segment, Sidebar, Visibility } from 'semantic-ui-react';
import Masthead from '../components/masthead';
import PageFooter from '../components/pagefooter';
import PageHeader from '../components/pageheader';
import SideMenu from '../components/sidemenu';
import '../styles/markdown.css';

export default class Template extends Component {
  state = {
    isSideMenuVisible: false,

    mastheadVisibility: {
      percentagePassed: 0,
      topPassed: false,
      bottomPassed: false,
      topVisible: false,
      bottomVisible: false,
    },
  };

  handleUpdate = (e, { calculations }) => this.setState({ mastheadVisibility: calculations });

  toggleMenu(event) {
    // This is necessary to stop the "onClick" event to be propagatted to the
    // parent DOM's "onClick" event
    event.stopPropagation();

    this.setState({ isSideMenuVisible: !this.state.isSideMenuVisible });
  }

  hideMenu() {
    this.setState({ isSideMenuVisible: false });
  }

  render() {
    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);

    const { markdownRemark: post } = this.props.data;
    const { frontmatter, html } = post;
    const { title, path } = frontmatter;

    const { isSideMenuVisible, mastheadVisibility } = this.state;

    const isTop = (path === "/");

    const showMenu = isTop ? (mastheadVisibility.percentagePassed > 0.8 || mastheadVisibility.bottomPassed) : true;

    return (
      <div>
        <Helmet title={`${title} - WISS 2019`}/>
        <Visibility onUpdate={this.handleUpdate}>
          { isTop ? <Masthead hideMenu={this.hideMenu} /> : null }
        </Visibility>
        <Sidebar.Pushable as={Segment} style={{ borderWidth: '0px', borderRadius: '0px', margin: '0px' }}>
          <SideMenu animation={true} visible={isSideMenuVisible} />
          <Sidebar.Pusher dimmed={isSideMenuVisible} onClick={this.hideMenu} >
            <PageHeader toggleMenu={this.toggleMenu} hideMenu={this.hideMenu} visible={showMenu} />
            { isTop ? null : <div style={{ height: '74px' }}></div> }
            <Container style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
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
